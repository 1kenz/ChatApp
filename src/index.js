import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

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

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
