import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AddProvaider from './components/Contexts/AddContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddProvaider>
        <App />
      </AddProvaider>
    </BrowserRouter>
  </React.StrictMode>
);

