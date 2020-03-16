import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root_reducer';
import thunk from 'redux-thunk';

// logger wiil console log the everything about the redux state transition
const store = createStore(rootReducer, applyMiddleware(thunk, logger));



// redux-thunk allows to return a function instead of object.
export default store;