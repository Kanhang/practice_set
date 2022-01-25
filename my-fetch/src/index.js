import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchComponent from './fetchComponent.jsx'
import FetchAll from './fetchAll.jsx'
import FetchAll_e1 from './exercise/fetchAll_e1.jsx'
import FetchAll_e2 from './exercise/fetchAll_e2.jsx'
import FetchAsync from './fetchAsync.jsx'
ReactDOM.render(
  <React.StrictMode>
    < FetchAll_e2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
