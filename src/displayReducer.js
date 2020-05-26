const displayReducer = (state = {display: 'hello', isLoading: false}, action) => {
    switch (action.type) {
        case 'CHANGE_THUNK':
            return {...state, isLoading: true};
        case 'CHANGE_SAGA':
            return {...state, isLoading: true};
        case 'CHANGE_OBSERVABLE':
            return {...state, isLoading: true};
        case 'CHANGE_KIWI':
            return {...state, display: action.display, isLoading: false};
        case 'CHANGE_HELLO':
            return {...state, display: action.display};
        case 'ERROR':
            return {...state, display: action.message, isLoading: false};
        default:
            return state;
    }
}

export default displayReducer;