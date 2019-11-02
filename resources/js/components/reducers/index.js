import authentication from './authentication';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    token: authentication
})

export default allReducers;
