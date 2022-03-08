/*-----------------------------------------------------------------------//
   /$$$$$$$$ /$$                               /$$       /$$          
  | $$_____/|__/                              | $$      |__/          
  | $$       /$$  /$$$$$$   /$$$$$$   /$$$$$$$| $$$$$$$  /$$  /$$$$$$ 
  | $$$$$   | $$ /$$__  $$ /$$__  $$ /$$_____/| $$__  $$| $$ /$$__  $$
  | $$__/   | $$| $$  \__/| $$$$$$$$|  $$$$$$ | $$  \ $$| $$| $$  \ $$
  | $$      | $$| $$      | $$_____/ \____  $$| $$  | $$| $$| $$  | $$
  | $$      | $$| $$      |  $$$$$$$ /$$$$$$$/| $$  | $$| $$| $$$$$$$/
  |__/      |__/|__/       \_______/|_______/ |__/  |__/|__/| $$____/ 
                                                          | $$      
                                                          | $$      
                                                          |__/
//-----------------------------------------------------------------------*/

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';

const root = document.getElementById('root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root,
);

ServiceWorkerRegistration.register();
