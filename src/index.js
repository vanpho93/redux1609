import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = { value: 0 };

const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD') return { value: state.value + 1 };
    if (action.type === 'SUB') return { value: state.value - 1 };
    return state;
}

const store = createStore(reducer);

const rootDiv = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootDiv);
registerServiceWorker();
// console.log(store.getState());
// store.dispatch({ type: 'ADD' });
// console.log(store.getState());
