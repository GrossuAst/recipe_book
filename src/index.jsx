import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/app/App';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <App router={ router } />
  </React.StrictMode>
);
