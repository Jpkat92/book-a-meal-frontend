import { mealConstants } from '../constants/meal.constants';
import { alertActions } from './alert.actions';
import { mealService } from '../services/meal.service';

export const mealActions = {
    loadAllMeals,
    createMeal,
    updateMeal,
    deleteMeal
};
 
function loadAllMeals() {
    return dispatch => {
        dispatch(loadMealRequest());
 
        mealService.getAllMeals()
            .then(
                response => {
                    dispatch(loadMealsSuccess(response))
                },
                error => dispatch(loadMealsFailure(error))
            );
    };
    function loadMealRequest() { return { type: mealConstants.LOAD_MEALS_REQUEST } }
    function loadMealsSuccess(meals) { return { type: mealConstants.LOAD_MEALS_SUCCESS, meals } }
    function loadMealsFailure(error) { return { type: mealConstants.LOAD_MEALS_FAILURE, error } }
}

function createMeal(meal) {

    return dispatch => {
        mealService.createMeal(meal)
            .then(
                meal => {
                      dispatch(createMealSuccess(meal));
                      dispatch(alertActions.success('Meal successfully created'));
                },
                error => {
                    dispatch(createMealFailure(error));
                }
            );
    };

    function createMealSuccess(meal) { return { type: mealConstants.CREATE_MEAL_SUCCESS, meal } }
    function createMealFailure(error) { return { type: mealConstants.CREATE_MEAL_FAILURE, error } }
}

function updateMeal(meal) {
    return dispatch => {
        mealService.updateMeal(meal.id, meal.name, meal.price)
            .then(
                meal => {
                    dispatch(updateMealSuccess(meal));
                    dispatch(alertActions.success(`Meal id #${meal.id} successfully updated`))
                },
                error => {
                    dispatch(updateMealFailure(error));
                    dispatch(alertActions.failure(error))
                }
            );
    };

    function updateMealSuccess(meal) { return { type: mealConstants.UPDATE_MEAL_SUCCESS, meal } }
    function updateMealFailure(error) { return { type: mealConstants.UPDATE_MEAL_FAILURE, error } }
}

function deleteMeal(id) {
    return dispatch => {
 
        mealService.deleteMeal(id)
            .then(
                message => {
                    dispatch(deleteMealSuccess(id));
                    dispatch(alertActions.success('Meal successfully deleted'))
                },
                error => {
                    dispatch(deleteMealFailure(id, error.toString()));
                    dispatch(alertActions.failure(error.toString()))
            }
        );
    };
 
    function deleteMealSuccess(id) { return { type: mealConstants.DELETE_MEAL_SUCCESS, id } }
    function deleteMealFailure(id, error) { return { type: mealConstants.DELETE_MEAL_FAILURE, id, error } }
}
