import { combineReducers } from 'redux';
import dataReducer from './cards';
import colorReducer from './colors';

export default combineReducers({
    data: dataReducer,
    colors: colorReducer
})