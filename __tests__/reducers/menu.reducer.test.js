import { menus } from '../../src/reducers/menu.reducer';
import { menuConstants } from '../../src/constants/menu.constants';

const initial_state = [
    {
        "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
        "day": {
            "id": 3,
            "name": "Wednesday"
        },
        "mealIds": [],
        "mealList": []
    }
]

describe('initial_state', () => {
    test('is correct', () => {
      const menuAction = { type: 'fake_menuAction' };
      const initialState = [];
  
      expect(menus(undefined, menuAction)).toEqual(initialState);
    });
});

describe('Loading menus request', () => {
    test('it returns loading menu status', () => {
        const menuAction = {
            type: menuConstants.LOAD_MENU_REQUEST
        };
        const expectedState =  [];
    
        expect(menus(undefined, menuAction)).toEqual(expectedState);
      });
});

describe('Load menus successful', () => {
    test('it returns all menus', () => {
        const menuAction = {
            type: menuConstants.LOAD_MENU_SUCCESS,
            menus: [
                {
                    "dateCreated": "Tue, 04 Sep 2018 17:38:37 GMT",
                    "day": {
                        "id": 5,
                        "name": "Friday"
                    },
                    "mealIds": [
                        8
                    ],
                    "mealList": [
                        {
                            "id": 8,
                            "name": "Biryani Rice",
                            "price": 10
                        }
                    ]
                },
                {
                    "dateCreated": "Tue, 04 Sep 2018 18:24:22 GMT",
                    "day": {
                        "id": 2,
                        "name": "Tuesday"
                    },
                    "mealIds": [
                        7,
                        8,
                        9
                    ],
                    "mealList": [
                        {
                            "id": 7,
                            "name": "Chicken Tikka",
                            "price": 15
                        },
                        {
                            "id": 8,
                            "name": "Biryani Rice",
                            "price": 10
                        },
                        {
                            "id": 9,
                            "name": "Chicken Curry",
                            "price": 18
                        }
                    ]
                }
            ] 
        };
        const expectedState =  menuAction.menus;
    
        expect(menus(undefined, menuAction)).toEqual(expectedState);
      });
});

describe('Load menus failure', () => {
    test('fails to return menus', () => {
        const menuAction = { 
            type: menuConstants.LOAD_MENU_FAILURE, 
            error : "Failed to fetch menus"
        };
        const expectedState = [];
    
        expect(menus(undefined, menuAction)).toEqual(expectedState);
      });
});

describe('Create menu success', () => {
    test('it returns all menus with new menu', () => {
        const initial_state =[ 
            {
                "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
                "day": {
                    "id": 3,
                    "name": "Wednesday"
                },
                "mealIds": [
                    7,
                    8,
                    9
                ],
                "mealList": [
                {
                    "id": 7,
                    "name": "Chicken Tikka",
                    "price": 15
                },
                {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                {
                    "id": 9,
                    "name": "Chicken Curry",
                    "price": 18
                }
            ]
            }
        ]
        const menuAction = {
            type: menuConstants.CREATE_MENU_SUCCESS,
            menu: {
                    "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
                    "day": {
                        "id": 3,
                        "name": "Wednesday"
                    },
                    "mealIds": [
                        7,
                        8,
                        9
                    ],
                    "mealList": [
                        {
                            "id": 7,
                            "name": "Chicken Tikka",
                            "price": 15
                        },
                        {
                            "id": 8,
                            "name": "Biryani Rice",
                            "price": 10
                        },
                        {
                            "id": 9,
                            "name": "Chicken Curry",
                            "price": 18
                        }
                    ]
                }
        };
        const expectedState =  [
            ...initial_state.filter(menu => menu.day.id !== menuAction.menu.day.id),
            Object.assign({}, menuAction.menu)
        ];
    
        expect(menus(undefined, menuAction)).toEqual(expectedState);
      });
});

describe('Create menu failure', () => {
    test('it fails to create a menu', () => {
        
        const menuAction = {
            type: menuConstants.CREATE_MENU_FAILURE,
            error : "Failed to create a menu"
        };
        const expectedState =  initial_state;
    
        expect(menus(initial_state, menuAction)).toEqual(expectedState);
      });
});

describe('Update menu success', () => {
    test('it returns all menus with updated menu', () => {
        
        const menuAction = {
            type: menuConstants.UPDATE_MENU_SUCCESS,
            menu: {
                    "dateCreated": "Tue, 04 Sep 2018 11:38:16 GMT",
                    "day": {
                        "id": 3,
                        "name": "Wednesday"
                    },
                    "mealIds": [
                        7,
                        8,
                        9
                    ],
                    "mealList": [
                        {
                            "id": 7,
                            "name": "Chicken Tikka",
                            "price": 15
                        },
                        {
                            "id": 8,
                            "name": "Biryani Rice",
                            "price": 10
                        },
                        {
                            "id": 9,
                            "name": "Chicken Curry",
                            "price": 18
                        }
                    ]
                }
        };
        const expectedState =  [
            ...initial_state.filter(menu => menu.day.id !== menuAction.menu.day.id),
            Object.assign({}, menuAction.menu)
        ];
    
        expect(menus(initial_state, menuAction)).toEqual(expectedState);
      });
});

describe('Update menu failure', () => {
    test('it fails to update a menu', () => {
        
        const menuAction = {
            type: menuConstants.UPDATE_MENU_FAILURE,
            error : "Failed to update menu"
        };
        const expectedState =  initial_state;
    
        expect(menus(initial_state, menuAction)).toEqual(expectedState);
      });
});
