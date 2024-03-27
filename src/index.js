import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//react me rounting kaise krte h ....
import {BrowserRouter} from "react-router-dom"//isse install krna pdega pehle n ye versipn 6 h hr version me alg alg hote h

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ye brpowser router use krenge
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
