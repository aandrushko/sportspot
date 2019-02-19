import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import teamReducer from './teamReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
 
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    team: teamReducer,
    firestore: firestoreReducer,   
    firebase: firebaseReducer
});

export default rootReducer