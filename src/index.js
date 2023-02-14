import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttractionsContextProvider } from './context/AttractionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttractionsContextProvider>
      <App />
    </AttractionsContextProvider>
  </React.StrictMode>
);