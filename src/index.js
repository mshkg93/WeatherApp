import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/index';
import './index.css';
import App from './App';
import CoordsContextProvider from './context/CoordsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoordsContextProvider>
        <App
          style={{
            background: 'url(./assets/weather-main.jpg)',
          }}
        />
      </CoordsContextProvider>
    </Provider>
  </React.StrictMode>
);
