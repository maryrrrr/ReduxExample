import { combineReducers } from 'redux';
import ProductReducer from './Reducers';

export default combineReducers({

    productState: ProductReducer,
})