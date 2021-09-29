// combine all reducers together to give it to store in index.js

import authReducer from './authReducer';
import projectReducer from './projectReducer';

//combine all reducers together
import { combineReducers } from 'redux'

//auth and project is reducer name that we will use in whole app
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
});

export default rootReducer;
