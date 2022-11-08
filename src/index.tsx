import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Router } from './components/router';
import { ItemCartProvider } from './contexts/itemCart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemCartProvider>
      <Router/>
    </ItemCartProvider>
  </React.StrictMode>
);

reportWebVitals();
