export default ( state = [], action ) => {
    switch(action.type) {
        case 'FETCH_GAME_SUCCESS':
            return action.payload;

        case 'CREATE_GAME_SUCCESS':
            return [ ...state, action.payload ];

        default:
            return state;
    }
}
