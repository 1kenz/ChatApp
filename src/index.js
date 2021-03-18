import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyA20x5Ij21cOQC9WAnJ46fV7_5LpwEiWMQ',
    authDomain: 'messenger-3b6b7.firebaseapp.com',
    projectId: 'messenger-3b6b7',
    storageBucket: 'messenger-3b6b7.appspot.com',
    messagingSenderId: '972694073694',
    appId: '1:972694073694:web:5a71fc2b8bc58769695fcf',
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
