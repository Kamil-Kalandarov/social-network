import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 /*  <React.StrictMode> */
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  /* </React.StrictMode> */
)
