import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {mealActions} from '../../actions/meal.actions';
import {alertActions} from '../../actions/alert.actions';
import MealForm from './MealForm';

export class ManageMealPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      meal: Object.assign({}, this.props.meal),
      errors: {},
      saving: false,
      selectedMeals: []
    };

    this.updateMealState = this.updateMealState.bind(this);
    this.saveMeal = this.saveMeal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.meal.id !== nextProps.meal.id) {
        this.setState({meal: Object.assign({}, nextProps.meal)});
      }
    }

  updateMealState(event) {
    const field = event.target.name;
    let meal = Object.assign({}, this.state.meal);
    console.log(meal);
    meal[field] = event.target.value;
    return this.setState({meal: meal});
  }

  saveMeal(event) {
    event.preventDefault();

    this.setState({saving: true});
    let {meal} = this.state;
    if (meal.id === ""){
        delete meal.id
        this.props.createMeal(meal)
        this.redirect("New meal has been added")
    }
    else{
        this.props.updateMeal(meal)
        this.redirect("Meal has been updated successfully")
    }
  }

  redirect(message) {
    this.setState({saving: false});
    this.props.success(message);
    this.context.router.history.push('/dashboard');
  }

  render() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col-md-10">
                    <div className="mainContent">
                        <div className="col-md-6 col-md-offset-1">
                            <MealForm
                                onChange={this.updateMealState}
                                onSave={this.saveMeal}
                                meal={this.state.meal}
                                errors={this.state.errors}
                                saving={this.state.saving}
                            />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
  }
}

ManageMealPage.propTypes = {
  meal: PropTypes.object.isRequired
};

ManageMealPage.contextTypes = {
  router: PropTypes.object
};

function getMealById(meals, id) {
  const meal = meals.filter(meal => meal.id === id);
  console.log(meal);
  if (meal) return meal[0]; 
  return null;
}

function mapStateToProps(state, ownProps) {
    const mealId = Number(ownProps.match.params.id);
    let meal = {id: '', name: '', price: ''};
    if (mealId) {
        meal = getMealById(state.meals, mealId);
    }
    return {
        meal: meal
    };
}

const mapDispatchToProps = {
    ...mealActions,
    ...alertActions
  };

export default connect(mapStateToProps, mapDispatchToProps)(ManageMealPage);
