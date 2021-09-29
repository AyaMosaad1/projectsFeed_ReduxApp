import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './components/store/reducers/rootReducer';
import { Provider } from 'react-redux';

//the store should take at least one reducer
const store = createStore(rootReducer);

//we use provider to bind "yrboot" the app with redux store..
ReactDOM.render(<Provider store={ store }> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
