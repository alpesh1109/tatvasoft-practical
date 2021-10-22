import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = (intialState = {}) => {
    return createStore(
        rootReducer,
        intialState,
        applyMiddleware(thunk)
    );
}
export default store;