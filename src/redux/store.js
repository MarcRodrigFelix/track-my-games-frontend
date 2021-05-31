import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    // game: gameReducer,
    user: userReducer
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;