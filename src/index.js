import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from "./App";
import Counter2 from "./Reducer";
import Component1 from "./test";

ReactDOM.render(
  <>
    <Counter />
      <br></br>
    <Counter2 />

      <br></br>
    <Component1 />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
