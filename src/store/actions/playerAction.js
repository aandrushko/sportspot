export const getAllUsers = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirestore();
        dispatch({
            type: 'ALL_USERS',
            project
        });
    }
}