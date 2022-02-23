import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { users } from './mocks/users';

const Setting: {
  AD_COUNT: number,
  isLoggedIn: boolean,
  isAds: boolean,
  isFavorites: boolean,
} = {
  AD_COUNT: 5,
  isLoggedIn: false,
  isAds: true,
  isFavorites: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      adCount = {Setting.AD_COUNT}
      isLoggedIn={Setting.isLoggedIn}
      isAds={Setting.isAds}
      isFavorites={Setting.isFavorites}
      offers={offers}
      reviews={reviews}
      users={users}
    />
  </React.StrictMode>,
  document.getElementById('root'));
