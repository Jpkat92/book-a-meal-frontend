import { menuConstants } from '../constants/menu.constants';
import initialState from './initialState';

export function menus(state = initialState.menus, action) {  
    switch(action.type) {
        case menuConstants.LOAD_MENU_REQUEST:
            return state
        case menuConstants.LOAD_MENU_SUCCESS:
            return action.menus
        case menuConstants.LOAD_MENU_FAILURE:
            return state
        case menuConstants.CREATE_MENU_SUCCESS:
              debugger;
            if(typeof action.menu === "undefined"){
                return state
            }
            else {
                return [
                    ...state.filter(menu => menu.day.id !== action.menu.day.id),
                    Object.assign({}, action.menu)
                ];
            }
        case menuConstants.CREATE_MENU_FAILURE:
            return state
        case menuConstants.UPDATE_MENU_SUCCESS:
         debugger;
            return [
                ...state.filter(menu => menu.day.id !== action.menu.day.id),
                Object.assign({}, action.menu)
              ];
        case menuConstants.UPDATE_MENU_FAILURE:
              return state;
        default: 
            return state;
    }
  }
