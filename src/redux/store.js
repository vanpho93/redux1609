import { createStore, combineReducers } from 'redux';

// const defaultState = { 
//     words: [
//         { en: 'hello', vn: 'xin chào', isMemorized: false },
//         { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
//         { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
//     ],
//     isShowForm: false
// };

const defaultWords = [
    { en: 'hello', vn: 'xin chào', isMemorized: false },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
];

/*
const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD_WORD') {
        const { en, vn, isMemorized } = action;
        const word = { en, vn, isMemorized };
        return { ...state, words: state.words.concat(word) };
    }
    if (action.type === 'REMOVE_WORD') {
        const { en } = action;
        return { ...state, words: state.words.filter(word => word.en !== en) };
    }
    if (action.type === 'TOGGLE_FORGOT') {
        const { en } = action;
        return { 
            ...state,
            words: state.words.map(word => {
                if (word.en !== en) return word;
                return { ...word, isMemorized: !word.isMemorized };
            })
        };
    }
    if (action.type === 'TOGGLE_FORM') {
        return { ...state, isShowForm: !state.isShowForm };
    }
    return state;
}
*/

const isShowFormReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_FORM') {
        return !state;
    }
    return state;
}

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

const reducer = combineReducers({ isShowForm: isShowFormReducer, words: wordsReducer });

const store = createStore(reducer);

// store.dispatch({ type: 'TOGGLE_FORGOT', en: 'afternoon' });

export default store;
