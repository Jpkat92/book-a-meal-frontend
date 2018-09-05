import { menuConstants } from '../constants/menu.constants';
import { menuService } from '../services/menu.service';
import { alertActions } from './alert.actions';

export const menuActions = {
    loadMenu,
    createMenu,
    updateMenu
};

function loadMenu(){
    return dispatch => {
        debugger;
        menuService.getMenu()
            .then(
                menus => {
                    dispatch(loadMenuSuccess(menus));
                },
                error => {
                    dispatch(loadMenuFailure(error.toString()));
                }
            );
    };
    function loadMenuSuccess(menus) { return { type: menuConstants.LOAD_MENU_SUCCESS, menus } }
    function loadMenuFailure(error) { return { type: menuConstants.LOAD_MENU_FAILURE, error } }
}

function createMenu(day, meals){
    return dispatch => {
        debugger;
        menuService.createMenu(day, meals)
            .then(
                menu => {
                    dispatch(createMenuSuccess(menu));
                },
                error => {
                    dispatch(createMenuFailure(error.toString()));
                }
            );
    };
    function createMenuSuccess(menus) { return { type: menuConstants.CREATE_MENU_SUCCESS, menus } }
    function createMenuFailure(error) { return { type: menuConstants.CREATE_MENU_FAILURE, error } }
}

function updateMenu(dayId, mealList){
    return dispatch => {
        debugger;
        menuService.updateMenu(dayId, mealList)
            .then(
                menu => {
                    debugger;
                    dispatch(updateMenuSuccess(menu));
                    dispatch(alertActions.success(`Today's menu has been updated`))
                },
                error => {
                    dispatch(updateMenuFailure(error.toString())),
                    dispatch(alertActions.failure(error.toString()))
                }
            );
    };
    function updateMenuSuccess(menu) { return { type: menuConstants.UPDATE_MENU_SUCCESS, menu } }
    function updateMenuFailure(error) { return { type: menuConstants.UPDATE_MENU_FAILURE, error } }
}
