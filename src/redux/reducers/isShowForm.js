const isShowFormReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_FORM') {
        return !state;
    }
    return state;
}

export default isShowFormReducer;
