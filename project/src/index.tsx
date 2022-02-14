import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting: {
  AD_COUNT: number,
  isLoggedIn: boolean,
  isAds: boolean,
} = {
  AD_COUNT: 5,
  isLoggedIn: false,
  isAds: false,
};

ReactDOM.render(
  <React.StrictMode>
    <App adCount = {Setting.AD_COUNT} isLoggedIn={Setting.isLoggedIn} isAds={Setting.isAds} />
  </React.StrictMode>,
  document.getElementById('root'));
