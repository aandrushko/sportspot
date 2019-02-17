const initState = {
    authError: null
}

const authReducer = (state = initState, action ) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError:'Login failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('login success')       
            return {
                ...state,
                authError:null
        }
        case 'LOG_OUT':
            return {
                ...state
            }
        case "SIGNUP_SUCCESS":
            console.log("new User has been created")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR": 
              return {
                ...state,
                authError: action.error
            }
        default:
        return state;
    }
}
export default authReducer