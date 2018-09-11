import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {connect} from 'react-redux';
import { history } from '../../helpers/history';
import {menuActions} from '../../actions/menu.actions';
import {alertActions} from '../../actions/alert.actions';
import { daysFormattedForDropdown } from '../common/selectors'
import MenuForm from './MenuForm';
import DailyMenu from './DailyMenu'

export class ManageMenuPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menu: Object.assign({}, this.props.menu),
      menus: this.props.menus,
      meals: this.props.meals,
      errors: {},
      creating: false,
      deleting: true,
      selectedDay: null,
      selectedMeals: []
    };

    this.updateMenuState = this.updateMenuState.bind(this);
    this.createMenu = this.createMenu.bind(this);
    this.onMealChecked = this.onMealChecked.bind(this);
    this.onDaySelected = this.onDaySelected.bind(this);
    this.cancelManageMenu = this.cancelManageMenu.bind(this);
  }

    updateMenuState(event) {
        const field = event.target.name;
        let menu = Object.assign({}, this.state.menu);
        menu[field] = event.target.value;
        return this.setState({menu: menu});
    }

    createMenu(event) {
        event.preventDefault();

        const selectedMeals = this.state.selectedMeals;
        this.setState({creating: true});
        let day = parseInt(this.state.selectedDay,10);
        this.props.createMenu(day, selectedMeals);
        this.setState({selectedMeals: [], selectedDay: null})
        this.setState({creating: false});
        history.push("/dashboard")
    }

    onDaySelected = (event) => {
        let { selectedDay } = this.state;
            selectedDay = event.target.value;
            this.setState({selectedDay});
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

    cancelManageMenu(){
        this.context.router.history.push('/dashboard');
    }

    render() {
        const {days} = this.props
        const {menus} = this.state
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mainContent">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-1">
                                <MenuForm
                                    meals={this.state.meals} onChange={this.updateOrderState}
                                    onCreateMenu={this.createMenu} onMealToggle={this.onMealChecked}
                                    onSelectDay={this.onDaySelected} onCancel={this.cancelManageMenu}
                                    selectedDay={this.state.selectedDay} allDays={days} menu={this.state.menu}
                                    errors={this.state.errors} creating={this.state.creating}
                                />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    { menus && menus.map(menu => 
                                        <DailyMenu key={menu.day.id} menu={menu}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

ManageMenuPage.propTypes = {
  menu: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired,
  meals: PropTypes.array.isRequired
};

ManageMenuPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const { menus } = state
    const meals = ownProps.location.state.meals;
    let menu = ownProps.location.state.menu;
    const days = daysFormattedForDropdown();
    return {
        menus,
        menu,
        days,
        meals
    };
}

const mapDispatchToProps = {
    ...menuActions,
    ...alertActions
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageMenuPage));
