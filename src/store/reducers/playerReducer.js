const initState = {

}
const playerReducer = (state = initState, action ) => {
    switch(action.type){
        case 'ALL_USERS':
            return state;
        case 'USER_BY_ID':
            return state;
        default: 
            return state
    }
}
export default playerReducer