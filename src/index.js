import ReactDOM from 'react-dom';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { App } from './App';
import {
  apiKey, appId, measurementId, messagingSenderId, storageBucket,
} from './config';
import './index.css';

const firebaseConfig = {
  apiKey,
  authDomain: 'jason-ren.firebaseapp.com',
  projectId: 'jason-ren',
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = document.getElementById('app');

ReactDOM.render(
  <App />,
  app,
);
