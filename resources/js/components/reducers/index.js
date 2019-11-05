import login from './login';
import registration from './registerReducer';


import { combineReducers } from 'redux';

const allReducers = combineReducers({
    token: login,
    registering: registration
})

export default allReducers;
