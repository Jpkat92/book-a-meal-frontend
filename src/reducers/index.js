import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { meals } from './meal.reducer';
import { orders } from './order.reducer';
import { menus } from './menu.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  orders,
  menus,
  meals
});

export default rootReducer;
