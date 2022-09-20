import React from 'react';
import ReactDOM from 'react-dom/client';

// Component & styling
import App from './App';


import reportWebVitals from './reportWebVitals';
import {First_Context_Provider} from './context/First_Context';



const root = ReactDOM.createRoot(document.getElementById('root1'));

root.render(
  <React.StrictMode>

    <First_Context_Provider>
      <App />
    </First_Context_Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
