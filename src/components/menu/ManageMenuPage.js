import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {connect} from 'react-redux';
import {menuActions} from '../../actions/menu.actions';
import {alertActions} from '../../actions/alert.actions';
import { daysFormattedForDropdown } from '../common/selectors'
import MenuForm from './MenuForm';

export class ManageMenuPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menu: Object.assign({}, this.props.menu),
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
  }

    componentWillReceiveProps(nextProps) {
        const location = nextProps.location;
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
        let day = parseInt(this.state.selectedDay);
        this.props.createMenu(day, selectedMeals);
        this.setState({selectedMeals: [], selectedDay: null})

        this.redirect("Menu has been updated");
    }
    
    redirect(message) {
        this.setState({creating: false});
        this.props.success(message);
        this.context.router.history.push('/dashboard');
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

    render() {
        const {days} = this.props
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-10">
                        <div className="mainContent">
                            <div className="col-md-6 col-md-offset-1">
                                <MenuForm
                                    meals={this.state.meals}
                                    onChange={this.updateOrderState}
                                    onCreateMenu={this.createMenu}
                                    onMealToggle={this.onMealChecked}
                                    onSelectDay={this.onDaySelected}
                                    selectedDay={this.state.selectedDay}
                                    allDays={days}
                                    menu={this.state.menu}
                                    errors={this.state.errors}
                                    creating={this.state.creating}
                                />
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
  actions: PropTypes.object.isRequired
};

ManageMenuPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const meals = ownProps.location.state.meals;
    let menu = ownProps.location.state.menu;
    let days = [
        {
            id: 1,
            name: "Monday"
        },
        {
            id: 2,
            name: "Tuesday"
        },
        {
            id: 3,
            name: "Wednesday"
        },
        {
            id: 4,
            name: "Thursday"
        },
        {
            id: 5,
            name: "Friday"
        },
        {
            id: 6,
            name: "Saturday"
        },
        {
            id: 7,
            name: "Sunday"
        },
    ]
    days = daysFormattedForDropdown(days);
    return {
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
