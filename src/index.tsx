import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./Store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setUpStore()

root.render(
   <BrowserRouter>
       <Provider store={store}>
           <App />
       </Provider>
   </BrowserRouter>
)