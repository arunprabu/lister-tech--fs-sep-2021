import React from 'react'; // core react package imported from node_modules
import ReactDOM from 'react-dom'; // to render component into html
import './index.css'; // custom import of css file
import App from './App'; // importing App Component to render using ReactDOM
import reportWebVitals from './reportWebVitals';

// React DOM is rendering App Component 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
