const defaultWords = [
    { en: 'hello', vn: 'xin chào', isMemorized: false },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
];

const wordsReducer = (state = defaultWords, action) => {
    if (action.type === 'ADD_WORD') {
        const { en, vn, isMemorized } = action;
        const word = { en, vn, isMemorized };
        return state.concat(word);
    }
    if (action.type === 'REMOVE_WORD') {
        const { en } = action;
        return state.filter(word => word.en !== en);
    }
    if (action.type === 'TOGGLE_FORGOT') {
        const { en } = action;
        return state.map(word => {
            if (word.en !== en) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    return state;
}

export default wordsReducer;
