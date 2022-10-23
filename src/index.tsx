import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {App, App2} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title="React + TS" />
    <App2 title="React + TS" />
  </React.StrictMode>
);
