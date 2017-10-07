import { combineReducers } from 'redux';
import wordsReducer from './words';
import isShowFormReducer from './isShowForm';

const reducer = combineReducers({ isShowForm: isShowFormReducer, words: wordsReducer });

export default reducer;
