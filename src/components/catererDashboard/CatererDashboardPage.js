import React, {Component} from 'react';  
import PropTypes from 'prop-types'
import {connect} from 'react-redux';  
import { history } from '../../helpers/history';
import { mealActions } from '../../actions/meal.actions';
import { orderActions } from '../../actions/order.actions';
import { menuActions } from '../../actions/menu.actions';
import MenuList from '../menu/MenuList'
import MealList from '../meals/MealList'
import OrderList from '../orders/OrderList'
import { alertActions } from '../../actions/alert.actions';
import { getTodaysMenu, makeItemsUnchecked } from '../common/utils';


class CatererDashboardPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            meals: this.props.meals,
            menus: this.props.menus,
            menu: this.props.menu,
            orders: this.props.orders,
            user: this.props.user,
            selectedMeals: [],
            selectedOrders: [],
            mealsToDelete: [],
            deletingOrder: false,
            deletingMeal: false
        }
        
        this.redirectToAddMealPage = this.redirectToAddMealPage.bind(this);
        this.redirectToManageMenuPage = this.redirectToManageMenuPage.bind(this);
        this.addMealsToMenu = this.addMealsToMenu.bind(this);
        this.onMealChecked = this.onMealChecked.bind(this);
        this.onOrderChecked = this.onOrderChecked.bind(this);
        this.deleteMeals = this.deleteMeals.bind(this);
        this.deleteOrders = this.deleteOrders.bind(this);
    }

    componentDidMount() {
        this.props.loadAllMeals();
        this.props.loadMenu();
        this.props.loadAllOrders();
    }

    componentWillReceiveProps(nextProps){
        const menu = getTodaysMenu(nextProps.menus)
        this.setState({
            meals: nextProps.meals,
            orders: nextProps.orders,
            menus: nextProps.menus,
            menu: menu
        })
    }

    onMealChecked(event, mealId){
        let { selectedMeals } = this.state;
        switch(event.target.checked){
            case true:
                selectedMeals.push(mealId);
                break;
           case false:
                selectedMeals.pop(mealId);
                break;
           default:
                break;
        }
        this.setState({selectedMeals});
    }

    onOrderChecked(event, orderId){
        let { selectedOrders } = this.state;
        switch(event.target.checked){
            case true:
                selectedOrders.push(orderId);
                break;
           case false:
                selectedOrders.pop(orderId);
                break;
           default:
                break;
        }
        this.setState({selectedOrders});
    }

    deleteOrders(event){
        event.preventDefault();
        const {selectedOrders} = this.state;
        if (selectedOrders.length > 0){
            this.setState({deletingOrder: true})
            for (let i = 0; i < selectedOrders.length; i++) {
                this.props.deleteOrder(selectedOrders[i]);
            }
            this.setState({deletingOrder: false})
            history.push("/dashboard")
        }
    }

    deleteMeals(event){
        event.preventDefault();
        const {selectedMeals} = this.state;
        if (selectedMeals.length > 0){
            this.setState({deletingMeal: true})
            for (let i = 0; i < selectedMeals.length; i++) {
                this.props.deleteMeal(selectedMeals[i]);
            }
            this.setState({deletingMeal: false})
            this.props.success(`${selectedMeals.length} Meals deleted`)
            history.push("/dashboard")
        }
    }

    addMealsToMenu(event){
        event.preventDefault();
        let {selectedMeals} = this.state;
        selectedMeals = selectedMeals.concat(this.state.menu.mealIds)
        if (selectedMeals.length > 0){
            debugger;
            this.props.updateMenu(this.state.menu.day.id, selectedMeals);
            history.push("/dashboard")
            this.props.success(`${selectedMeals.length} meal(s) added to today's menu`)
        }
        else{
            this.props.error("No meals selected");
        }
    }

    redirectToAddMealPage() {
        history.push('/meals/');
    }

    redirectToManageMenuPage() {
        const menu = this.state.menu;
        const { meals } = this.state;
        history.push({
            pathname: '/menu/',
            state: { 
                    menu: menu,
                    meals: meals
                }
            });
    }

    render() {
        const isAdmin = this.state.user.isAdmin
        const {meals} = this.state
        const {orders} = this.state
        const menu = this.state.menu
        debugger;
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-offset-1 col-md-10 col-xs-12">
                        <div className="mainContent">
                            <MealList meals={meals}
                                onAddMeal={this.redirectToAddMealPage}
                                onAddToMenu={this.addMealsToMenu}
                                deletingMeal={this.state.deletingMeal}
                                onToggleMeal={this.onMealChecked}
                                onDeleteMeal={this.deleteMeals}/>
                            <MenuList menu={menu} 
                                  meals={meals}
                                  onClickButton={this.redirectToManageMenuPage}
                                  isAdmin={isAdmin}/> 
                            <OrderList orders={orders}
                                changingOrder={this.state.deletingOrder}
                                onToggleOrder={this.onOrderChecked}
                                onClickButton={this.deleteOrders}
                                isAdmin={isAdmin}/>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
  }

CatererDashboardPage.propTypes = {
    menus: PropTypes.array.isRequired,
    meals: PropTypes.array.isRequired,
    orders: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    let { orders } = state;
    const { user } = state.authentication;
    const { menus } = state
    let { meals } = state;
    const menu = getTodaysMenu(menus);
    meals = makeItemsUnchecked(meals);
    orders = makeItemsUnchecked(orders);
    debugger;
    return {
        user,
        menus,
        menu,
        orders,
        meals
    };
} 

const mapDispatchToProps = {
    ...mealActions,
    ...menuActions,
    ...orderActions,
    ...alertActions
  };

export default connect(mapStateToProps, mapDispatchToProps)(CatererDashboardPage); 
