import { createStore } from 'redux';

const defaultState = { 
    words: [
        { en: 'hello', vn: 'xin chào', isMemorized: false },
        { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
        { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
    ]
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD_WORD') {
        const { en, vn, isMemorized } = action;
        const word = { en, vn, isMemorized };
        return { words: state.words.concat(word) };
    }
    if (action.type === 'REMOVE_WORD') {
        const { en } = action;
        return { words: state.words.filter(word => word.en !== en) };
    }
    if (action.type === 'TOGGLE_FORGOT') {
        const { en } = action;
        return { 
            words: state.words.map(word => {
                if (word.en != en) return word;
                return { ...word, isMemorized: !word.isMemorized };
            })
        };
    }
    return state;
}

const store = createStore(reducer);

// store.dispatch({ type: 'TOGGLE_FORGOT', en: 'afternoon' });

export default store;
