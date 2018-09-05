import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';


const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware, logger
            )
        )
    );
    store.subscribe(throttle(() => {
        saveState({
            meals: store.getState().meals,
            menus: store.getState().menus,
            orders: store.getState().orders
        }); 
    }, 1000));

    return store;
};

export default configureStore;
