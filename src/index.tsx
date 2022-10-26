import React from 'react';
import ReactDOM from 'react-dom/client';
import { LeadingPage } from './pages/LeadingPage/LeadingPage';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Router } from 'components/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

reportWebVitals();
