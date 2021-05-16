import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import gameReducer from './reducers/gameReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    gameReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__  || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;