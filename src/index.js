import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

