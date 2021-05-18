const gameReducer = ( state = [], action ) => {
    switch(action.type) {
        case 'LOAD_GAMES':
            return [ ...state, action.payload ];
            
        case 'FETCH_GAME_SUCCESS':
            return action.payload;

        case 'CREATE_GAME_SUCCESS':
            return [ ...state, action.payload ];

        default:
            return state;
    }
}

export default gameReducer;