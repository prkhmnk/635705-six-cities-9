import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { RentalHousingOffer } from '../../types/offer';
import { UserReview } from '../../types/review';
import { OfferUser } from '../../types/user';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import PropertyPage from '../pages/property-page/property-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../../hocs/private-route/private-route';

type AppProps = {
  isLoggedIn: boolean,
  isAds: boolean,
  isFavorites: boolean,
  offers: RentalHousingOffer[],
  reviews: UserReview[],
  users: OfferUser
}

export default function App({ isLoggedIn, isAds, isFavorites, offers, reviews, users }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage isLoggedIn={isLoggedIn} isAds={isAds} offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <FavoritesPage isLoggedIn={isLoggedIn} isFavorites={isFavorites} offers={offers.filter((offer) => offer.isFavorite)} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<PropertyPage isLoggedIn={isLoggedIn} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
