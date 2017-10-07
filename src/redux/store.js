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
    return state;
}

const store = createStore(reducer);

// store.dispatch({ type: 'ADD_WORD' });

export default store;
