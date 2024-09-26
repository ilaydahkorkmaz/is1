import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; 
import App from './components/App'; 
import reportPerformance from './utils/reportPerformance'; 
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportPerformance(console.log);
