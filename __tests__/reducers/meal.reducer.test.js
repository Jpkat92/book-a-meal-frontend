import { meals } from '../../src/reducers/meal.reducer';
import { mealConstants } from '../../src/constants/meal.constants';

describe('initial_state', () => {
    test('is correct', () => {
      const mealAction = { type: 'fake_action' };
      const initialState = [];
  
      expect(meals(undefined, mealAction)).toEqual(initialState);
    });
  });

const initial_state_ = [
    {
        "id": 7,
        "name": "Chicken Tikka",
        "price": 15
    }
]

describe('Loading meals request', () => {
    test('it returns loading meal status', () => {
        const mealAction = {
            type: mealConstants.LOAD_MEALS_REQUEST
        };
        const expectedState =  [];
    
        expect(meals(undefined, mealAction)).toEqual(expectedState);
      });
});

describe('Load meals successful', () => {
    test('it returns meals', () => {
        const mealAction = {
            type: mealConstants.LOAD_MEALS_SUCCESS,
            meals: [
                {
                    "id": 5,
                    "name": "Chapati",
                    "price": 8
                }
            ] 
        };
        const expectedState =  mealAction.meals;
    
        expect(meals(undefined, mealAction)).toEqual(expectedState);
      });
});

describe('Load meals failure', () => {
    test('fails to return meals', () => {
        const mealAction = { 
            type: mealConstants.LOAD_FAILURE, 
            error : "Failed to fetch meals"
        };
        const expectedState = [];
    
        expect(meals(undefined, mealAction)).toEqual(expectedState);
      });
});

describe('Create a meal', () => {
    test('it returns meals with new meal', () => {

        const mealAction = {
            type: mealConstants.CREATE_MEAL_SUCCESS,
            meal: 
                {
                    "id": 5,
                    "name": "Chapati",
                    "price": 8
                }
        };
        const expectedState =  [
                    ...initial_state_,
                    Object.assign({}, mealAction.meal)
                ];
    
        expect(meals(initial_state_, mealAction)).toEqual(expectedState);
      });
});

describe('Create meal failure', () => {
    test('fails to create a meal', () => {
        const mealAction = { 
            type: mealConstants.LOAD_FAILURE, 
            error : "Failed to create meal"
        };
        const expectedState = [];
    
        expect(meals(undefined, mealAction)).toEqual(expectedState);
      });
});

describe('Update a meal', () => {
    test('it returns meals with an updated meal', () => {
        
        const mealAction = {
            type: mealConstants.UPDATE_MEAL_SUCCESS,
            meal: 
            {
                "id": 7,
                "name": "Fish Tikka",
                "price": 15
            }
        };
        const expectedState =  [
                    ...initial_state_.filter(
                        meal => meal.id !== mealAction.meal.id),
                    Object.assign({}, mealAction.meal)
                ];
    
        expect(meals(initial_state_, mealAction)).toEqual(expectedState);
      });
});

describe('Update a meal failure', () => {
    test('it fails to update a meal', () => {
        const initial_state = [
            {
                "id": 7,
                "name": "Chicken Tikka",
                "price": 15
            }
        ]
        const mealAction = {
            type: mealConstants.UPDATE_MEAL_FAILURE,
            error : "Failed to update a meal"
        };
        const expectedState =  initial_state;
    
        expect(meals(initial_state, mealAction)).toEqual(expectedState);
      });
});

describe('Delete a meal', () => {
    test('it returns meals removing deleted meal', () => {
        
        const mealAction = {
            type: mealConstants.DELETE_MEAL_SUCCESS,
            id: 7
        };
        const expectedState =  [
                    ...initial_state_.filter(
                        meal => meal.id !== mealAction.id)
                ];
    
        expect(meals(initial_state_, mealAction)).toEqual(expectedState);
      });
});

describe('Delete a meal failure', () => {
    test('it fails to delete a meal', () => {
        
        const action = {
            type: mealConstants.DELETE_MEAL_FAILURE,
            error : "Failed to delete a meal"
        };
        const expectedState =  initial_state_;
    
        expect(meals(initial_state_, action)).toEqual(expectedState);
      });
});
