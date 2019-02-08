const initState = {
    projects: [
        {id: 1, title: 'Project1', content: 'Blahblahblah'},
        {id: 2, title: 'Project4', content: 'Blahblahblah'},
        {id: 3, title: 'Proj3', content: 'Blahblahblah'},
        {id: 4, title: 'Project2', content: 'Blahblahblah'},
    ]
}
const projectReducer = (state = initState, action ) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            return state;
        case 'DELETE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.error);
            return state
        default: 
            return state
    }
}
export default projectReducer