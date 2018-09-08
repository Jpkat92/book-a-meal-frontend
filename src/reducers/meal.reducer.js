import { mealConstants } from '../constants/meal.constants';
import initialState from './initialState';

export function meals(state = initialState.meals, action) {  
    switch(action.type) {
      case mealConstants.LOAD_MEALS_REQUEST:
        return state;
      case mealConstants.LOAD_MEALS_SUCCESS:
      return action.meals
      case mealConstants.LOAD_MEALS_FAILURE:
        return state
      case mealConstants.CREATE_MEAL_REQUEST:
        return state;
      case mealConstants.CREATE_MEAL_SUCCESS:
        return [...state, Object.assign({}, action.meal)]
      case mealConstants.UPDATE_MEAL_SUCCESS:
        return [
          ...state.filter(meal => meal.id !== action.meal.id),
          Object.assign({}, action.meal)
        ];
      case mealConstants.UPDATE_MEAL_FAILURE:
        return state
      case mealConstants.DELETE_MEAL_SUCCESS:
        return [
          ...state.filter(meal => meal.id !== action.id)
        ];
      case mealConstants.DELETE_MEAL_FAILURE:
        return state;
      default: 
        return state;
    }
  }
