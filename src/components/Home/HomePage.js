import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import MenuList from '../menu/MenuList'
import { menuActions } from '../../actions/menu.actions';
import { orderActions } from '../../actions/order.actions';
import { alertActions } from '../../actions/alert.actions';
import { userActions } from '../../actions/user.actions';
import OrderList from '../orders/OrderList';
import { getTodaysMenu, makeItemsUnchecked, updateCheckedItems } from '../common/utils';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            menus: this.props.menus,
            menu: this.props.menu,
            orders: this.props.orders,
            user: this.props.user,
            selectedMeals: [],
            selectedOrders: []
        }
        this.placeOrder = this.placeOrder.bind(this);
        this.deleteOrders = this.deleteOrders.bind(this);
        this.onOrderChecked = this.onOrderChecked.bind(this);
        this.onMealChecked = this.onMealChecked.bind(this);
    }

    componentWillMount() {
        this.props.loadMenu();
        this.props.loadAllOrders();
   }

    componentWillReceiveProps(nextProps){
        if(nextProps.history.location.state !== "undefined"){
            this.setState({
                meals: nextProps.meals,
                orders: nextProps.orders,
                menus: nextProps.menus,
                menu: nextProps.menu
            })
        }
    }

    onMealChecked(event, mealId){
        let { menu, selectedMeals } = this.state;
        let meal = this.state.menu.mealList.filter(meal => meal.id === mealId)
        menu = {
            ...menu,
            mealList : [...menu.mealList.filter(meal => meal.id !== mealId),meal[0]]
        }
        this.setState({
            menu,
            selectedMeals: updateCheckedItems(event, mealId, selectedMeals)
        });
    }

    onOrderChecked(event, orderId){
        let { selectedOrders } = this.state;
        this.setState({
            selectedOrders : updateCheckedItems(event, orderId, selectedOrders)
        });
    }

    placeOrder(event){
        event.preventDefault();
        let { selectedMeals } = this.state;
        for (let i = 0; i < selectedMeals.length; i++) {
            this.props.createOrder(selectedMeals[i]);
        }
        history.push("/")
    }

    deleteOrders(event){
        event.preventDefault();
        const {selectedOrders} = this.state;
        if (selectedOrders.length > 0){
            for (let i = 0; i < selectedOrders.length; i++) {
                this.props.deleteOrder(selectedOrders[i]);
            }
            history.push("/")
        }
    }
 
    render() {
        const { menu, orders, user } = this.state
        debugger;
        return (
                <div className="wrapper">
                <div className="jumbotron">
                    <h1 style={{'color':'#337ab7'}}>Welcome to Book-A-Meal</h1>
                    <p><em>Order your favourite meals hassle free!</em></p>
                </div>
                <div className="col-md-10">
                    <div className="mainContent">
                        <MenuList 
                            menu={menu}
                            meals={menu.mealList}
                            toggleMeal={this.onMealChecked}
                            onClickButton={this.placeOrder}
                            isAdmin={user.isAdmin}/>
                        <OrderList 
                            orders={orders}
                            changingOrder={false}
                            onToggleOrder={this.onOrderChecked}
                            onClickButton={this.deleteOrders}/> 
                </div>
                </div>
            </div>
            );
        }
    }

    function mapStateToProps(state) {
        const { authentication } = state;
        const { user } = authentication;
        const { menus } = state
        const { orders } = state
        let menu = {
            "day": {},
            "mealIds": [],
            "mealList": []
        }

        if (menus instanceof Array){
            menu = getTodaysMenu(menus);
        }
        menu.mealList = makeItemsUnchecked(menu.mealList);
        return {
            user,
            menu,
            orders
        };
    }

    const mapDispatchToProps = {
        ...menuActions,
        ...orderActions,
        ...alertActions,
        ...userActions
      };

    
    const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
    export { connectedHomePage as HomePage };
