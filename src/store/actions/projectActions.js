export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //async call there
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Andrii',
            authorLastName: 'Andrushko',
            addedAt: new Date().getTime()
        }).then( ()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((error)=>{
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error
            });
        });
    }
};
export const deleteProject = (project) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        const firestore = getFirestore();
             dispatch({
                type: 'DELETE_PROJECT',
                project
            });
    }
}