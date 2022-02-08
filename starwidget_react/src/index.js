import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import StarWidget from'./StarWidget_hooks.jsx'
//import StarWidget from'./exercise/StarWidget_hooks_e1.jsx'
import StarWidget from'./exercise2/StarWidget_e2.jsx'
//import StarWidget from'./StarWidget_class.jsx'
ReactDOM.render(
  <React.StrictMode>
    <StarWidget/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<div id = "container"></div>