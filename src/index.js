import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBOnM-bt3sMS2SAkKriPjrbLv_XJlK3XUA',
    authDomain: 'claruswaychat-e0717.firebaseapp.com',
    projectId: 'claruswaychat-e0717',
    storageBucket: 'claruswaychat-e0717.appspot.com',
    messagingSenderId: '384849413735',
    appId: '1:384849413735:web:2d0aba3bd27a213b4536c2',
    // measurementId: "G-VXYE76S2G7"
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
