import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ContextProvider'; // Corrigido

ReactDOM.render(
  <ThemeProvider> {/* Envolvendo o App com ThemeProvider */}
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
