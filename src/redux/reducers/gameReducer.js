const gameReducer = ( state = [], action ) => {
    switch(action.type) {
        case 'FETCH_GAME_SUCCESS':
            return action.payload;

        default:
            return state;
    }
}


export default gameReducer;