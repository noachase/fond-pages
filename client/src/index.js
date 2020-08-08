import './index.scss';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root'));




// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
