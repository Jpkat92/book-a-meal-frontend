import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import MenuList from '../menu/MenuList'
import { menuActions } from '../../actions/menu.actions';
import { orderActions } from '../../actions/order.actions';
import { alertActions } from '../../actions/alert.actions';
import { userActions } from '../../actions/user.actions';
import OrderList from '../orders/OrderList';
import { getTodaysMenu, makeItemsUnchecked } from '../common/utils';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            menus: this.props.menus,
            menu: this.props.menu,
            orders: this.props.orders,
            user: this.props.user,
            selectedMeals: []
        }
        this.redirectToManageOrderPage = this.redirectToManageOrderPage.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
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
        let { selectedMeals } = this.state;
        let meal = this.state.menu.mealList.filter(meal => meal.id === mealId)
        switch(event.target.checked){
            case true:
                meal[0].isChecked = true
                selectedMeals.push(mealId);
                break;
           case false:
                meal[0].isChecked = false
                selectedMeals.pop(mealId);
                break;
           default:
                break;
        }
        let { menu } = this.state
        menu = {
            day: menu.day,
            mealIds : menu.mealIds,
            mealList : [
                ...menu.mealList.filter(meal => meal.id !== mealId),
                meal[0]
            ]
        }
        this.setState({menu});
        this.setState({selectedMeals});
    }

    placeOrder(event){
        event.preventDefault();
        let { selectedMeals } = this.state;
        alert(`Order Placed for ${selectedMeals}`)
        for (let i = 0; i < selectedMeals.length; i++) {
            this.props.createOrder(selectedMeals[i]);
        }
        history.push("/")
    }

    onOrderChecked(event, orderId){

    }

    redirectToManageOrderPage() {
        history.push('/orders/');
    }
 
    render() {
        const isAdmin = this.props.user.isAdmin
        const { menu } = this.state
        const { orders } = this.state
        const menuMeals = menu.mealList
        debugger;
        return (
                <div className="wrapper">
                <div className="jumbotron">
                    <h1>Welcome to Book-A-Meal</h1>
                    <p>Order your favourite meals hassle free!</p>
                </div>
                <div className="mainContent">
                        <MenuList 
                            menu={this.state.menu}
                            meals={menuMeals}
                            toggleMeal={this.onMealChecked}
                            onClickButton={this.placeOrder}
                            isAdmin={isAdmin}/>
                        <OrderList 
                            orders={orders}
                            changingOrder={false}
                            onToggleOrder={this.onOrderChecked}
                            onClickButton={this.redirectToManageOrderPage}
                            isAdmin={isAdmin}/> 
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
        debugger;
        let menu = {
            "day": {},
            "mealIds": [],
            "mealList": []
        }

        if (menus instanceof Array){
            menu = getTodaysMenu(menus);
        }
        menu.mealList = makeItemsUnchecked(menu.mealList);
        debugger;
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
