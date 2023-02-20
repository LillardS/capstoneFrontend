import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AttractionsContextProvider } from './context/AttractionsContext';
import { AuthContextProvider } from './context/AuthContext';

// displays inside the root div on index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AttractionsContextProvider>
        <App />
      </AttractionsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);