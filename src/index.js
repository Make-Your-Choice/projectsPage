import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Global from './styles/Global';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <Projects />
  </React.StrictMode>
);
