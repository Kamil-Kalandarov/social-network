import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';

// store принимает внутри себя applyMiddleware, который внутри себя может обработать санку
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
