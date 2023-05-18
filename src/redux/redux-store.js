import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const store = createStore(rootReducer);

window.store = store;

export default store;
