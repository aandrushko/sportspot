const initState = {
    teams: [
        {
            teamId : '1',
            teamLead: 'userID1',
            date: new Date().getTime(),
            teamName: 'Incredibles', // number of players who already commited,
            capacity:10,
            teamType: 'Football',
            winRate: 60 //duration in minutes
        },
        {
            teamId : '2',
            teamLead: 'userID2',
            date: new Date().getTime(),
            teamName: 'Millenials', // number of players who already commited,
            capacity:10,
            teamType: 'Baseball',
            winRate: 60 //duration in minutes
        },
        {
            teamId : '3',
            teamLead: 'userID3',
            date: new Date().getTime(),
            teamName: 'Killers', // number of players who already commited,
            capacity:10,
            teamType: 'Basketball',
            winRate: 60 //duration in minutes
        }
    ]    
}
const teamReducer = (state = initState, action ) => {
    switch(action.type){
        case 'CREATE_TEAM':
            return state;
        case 'DELETE_TEAM':
            return state;
        case 'CREATE_TEAM_ERROR':
            return state
        default: 
            return state
    }
}
export default teamReducer