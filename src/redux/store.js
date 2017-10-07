import { createStore } from 'redux';
import reducer from './reducers/reducer';
/*

const defaultState = { 
    words: [
        { en: 'hello', vn: 'xin chào', isMemorized: false },
        { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
        { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
    ],
    isShowForm: false
};

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


const store = createStore(reducer);

// store.dispatch({ type: 'TOGGLE_FORGOT', en: 'afternoon' });

export default store;
