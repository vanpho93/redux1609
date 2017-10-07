import { createStore } from 'redux';

const defaultState = { 
    words: [
        { en: 'hello', vn: 'xin chào', isMemorized: false },
        { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
        { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
    ]
};

const reducer = (state = defaultState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;
