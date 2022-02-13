import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting: {
  AD_COUNT: number
} = {
  AD_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App adCount = {Setting.AD_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
