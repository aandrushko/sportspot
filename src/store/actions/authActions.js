export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOG_OUT'})
        })
        
    }
}

export const signUp = (userData) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then((response)=>{
            return  firestore.collection('users').doc(response.user.uid).set({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    initials: userData.firstName[0] + userData.lastName[0]
            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        })
        .catch((error)=>{
            dispatch({type : 'SIGNUP_ERROR', error})
        })
        
    }
}