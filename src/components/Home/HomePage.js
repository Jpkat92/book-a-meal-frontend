import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import MenuList from '../menu/MenuList'
import { menuActions } from '../../actions/menu.actions';
import { orderActions } from '../../actions/order.actions';
import { alertActions } from '../../actions/alert.actions';
import { userActions } from '../../actions/user.actions';
import OrderList from '../orders/OrderList';
import { makeItemsUnchecked, updateCheckedItems } from '../common/utils';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            menus: this.props.catererMenus,
            orders: this.props.orders,
            user: this.props.user,
            selectedMeals: [],
            selectedOrders: [],
            selectedCaterer: {
                id: "",
                name: "",
                menuDetails: {mealList:[]}
            },
            activeMenu: {
                dateCreated: "",
                mealIds: [], 
                mealList: []
            }
        }
        this.placeOrder = this.placeOrder.bind(this);
        this.deleteOrders = this.deleteOrders.bind(this);
        this.onOrderChecked = this.onOrderChecked.bind(this);
        this.onMealChecked = this.onMealChecked.bind(this);
        this.handleSelectCaterer = this.handleSelectCaterer.bind(this)
    }

    componentWillMount() {
        if(this.props.user.isAdmin){
            history.push('/dashboard');
        }
        this.props.loadMenu();
        this.props.loadAllOrders();
   }

    componentWillReceiveProps(nextProps){
        if(nextProps.history.location.state !== "undefined"){
            this.setState({
                orders: nextProps.orders,
                menus: nextProps.catererMenus
            })
        }
    }

    handleSelectCaterer(event){
        let menus = this.state.menus
        const catererId = event.target.value;
        const menuSelected = menus.filter(menu => menu.caterer.id === parseInt(catererId))
        const caterer = menuSelected[0].caterer
        const  menuDetails = menuSelected[0].menuDetails
        this.setState({
            selectedCaterer: caterer,
            activeMenu: menuDetails
        });
    }

    onMealChecked(event, mealId){
        let { selectedMeals } = this.state;
        this.setState({
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
        let { selectedMeals, selectedCaterer } = this.state;
        for (let i = 0; i < selectedMeals.length; i++) {
            this.props.createOrder(selectedMeals[i], selectedCaterer.id);
        }
        this.setState({selectedMeals: []});
        history.push("/")
    }

    deleteOrders(event){
        event.preventDefault();
        const {selectedOrders} = this.state;
        if (selectedOrders.length > 0){
            for (let i = 0; i < selectedOrders.length; i++) {
                this.props.deleteOrder(selectedOrders[i]);
            }
            this.setState({selectedMeals: []});
            history.push("/")
        }
    }
 
    render() {
        const { orders, user, selectedCaterer, activeMenu } = this.state
        const caterers = this.state.menus
        return (
                <div className="wrapper">
                <div className="jumbotron">
                    <h1 style={{'color':'#337ab7'}}>Welcome to Book-A-Meal</h1>
                    <p><em>Order your favourite meals hassle free!</em></p>
                </div>
                <div className="col-md-10">
                    <div className="mainContent">
                        <MenuList 
                            menu={activeMenu}
                            meals={activeMenu.mealList}
                            onSelectCaterer={this.handleSelectCaterer}
                            caterer={selectedCaterer}
                            allCaterers={caterers}
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
        const { authentication, menus } = state;
        const { user } = authentication;
        const { orders } = state;
        
        let menusToDisplay = menus
        if(!user.isAdmin){
            if (menus.length > 0 && typeof menus !== 'undefined') {
                for (let i = 0; i < menusToDisplay.length; i++){
                    let mealList = menusToDisplay[i].menuDetails.mealList
                    menusToDisplay[i].menuDetails.mealList = makeItemsUnchecked(mealList);
                }
            }
        }
        
        return {
            user,
            catererMenus: menusToDisplay,
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
