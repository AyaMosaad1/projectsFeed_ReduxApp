import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authorReducer from './authorReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  author:authorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

// the key name will be the data property on the state object