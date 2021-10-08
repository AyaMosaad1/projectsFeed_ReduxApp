//Credentials is jst the logIn date that we need to app



export const signIn = (Credentials) => {

    //by thunk we use this middleware to handle the auth
    //thunk bring dataBase to app
    //dispatch is response  after enter the data
    //we need to write dispatches in reducer

    return (dispatch , getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password,
        ).then(() =>{
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) =>{
            dispatch({ type:"LOGIN_ERROR" , err})
        })
    }
}