const initState = {
    projects: [
        {
            gameId : '1',
            gameCreator: 'userID1',
            date: new Date().getTime(),
            commitments: 8, // number of players who already commited,
            capacity:10,
            minNumberOfPlayers: 8,
            gameType: 'Football',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring ball'
        },
        {
            gameId : '2',
            gameCreator: 'userID2',
            date: new Date().getTime(),
            commitments: 8, // number of players who already commited,
            capacity:10,
            minNumberOfPlayers: 8,
            gameType: 'Baseball',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring ball'
        },
        {
            gameId : '3',
            gameCreator: 'userID3',
            date: new Date().getTime(),
            commitments: 8, // number of players who already commited,
            capacity:10,
            minNumberOfPlayers: 4,
            gameType: 'Basketball',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring ball'
        },
        {
            gameId : '4',
            gameCreator: 'userID4',
            date: new Date().getTime(),
            commitments: 4, // number of players who already commited,
            capacity:4,
            minNumberOfPlayers: 2,
            gameType: 'Tennis',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring ball'
        },
        {
            gameId : '5',
            gameCreator: 'userID5',
            date: new Date().getTime(),
            commitments: 2, // number of players who already commited,
            capacity:2,
            minNumberOfPlayers: 2,
            gameType: 'Pool',
            gameDuration: 60, //duration in minutes,
            playersCommitted: ['userID1','userID2','userID3'],
            notes: 'Roman pls bring balls'
        }
    ]    
}
const projectReducer = (state = initState, action ) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            return state;
        case 'DELETE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state
        default: 
            return state
    }
}
export default projectReducer