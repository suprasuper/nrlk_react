import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   //bootstrap
import './assets/css/sb_admin/css/sb-admin-2.min.css'; //sb_admin_2
import './assets/css/sb_admin/js/sb-admin-2' //bootstrap js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

