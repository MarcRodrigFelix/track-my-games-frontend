import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import gameReducer from './reducers/gameReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    game: gameReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__  || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;