import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { users } from './mocks/users';

const Setting: {
  isLoggedIn: boolean,
  isAds: boolean,
  isFavorites: boolean,
} = {
  isLoggedIn: false,
  isAds: true,
  isFavorites: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      isLoggedIn={Setting.isLoggedIn}
      isAds={Setting.isAds}
      isFavorites={Setting.isFavorites}
      offers={offers}
      reviews={reviews}
      users={users}
    />
  </React.StrictMode>,
  document.getElementById('root'));
