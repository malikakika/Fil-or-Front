import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez createRoot depuis react-dom/client
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} /> {/* Changez le chemin de la route parente */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
