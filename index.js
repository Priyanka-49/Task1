import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Kgcoding from './Kgcoding';
import reportWebVitals from './reportWebVitals';
//  import Router1 from './Router1';
import "bootstrap/dist/css/bootstrap.min.css";
import Routertask from './Routertask';
// import bootstrap from './bootstrap';
// import AdmissionForm  from './AdmissionForm';
//import HomePage from './HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routertask/>
  </React.StrictMode>
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
