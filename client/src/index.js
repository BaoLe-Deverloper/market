import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker.unregister();