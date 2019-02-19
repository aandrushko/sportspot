export const createTeam = (team) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //async call there
        const firestore = getFirestore();
        firestore.collection('team').add({
            ...team,
            authorFirstName: 'Andrii',
            authorLastName: 'Andrushko',
            addedAt: new Date().getTime()
        }).then( ()=>{
            dispatch({
                type: 'CREATE_TEAM',
                team
            });
        }).catch((error)=>{
            dispatch({
                type: 'CREATE_TEAM_ERROR',
                error
            });
        });
    }
};
export const deleteTeam = (team) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        const firestore = getFirestore();
             dispatch({
                type: 'DELETE_TEAM',
                team
            });
    }
}