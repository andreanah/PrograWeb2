import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import Grid from './components/Grid'
import Footer from './components/Footer'
import Login from './components/Login'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    
  </React.StrictMode>,
  document.getElementById('rootMain')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();