import React from 'react';
/* import ReactDOM from 'react-dom/client'; */
import {createRoot} from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'



const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


