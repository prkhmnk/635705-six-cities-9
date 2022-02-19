import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

type AppProps = {
  adCount: number,
  isLoggedIn: boolean,
  isAds: boolean,
  isFavorites: boolean,
}

export default function App({adCount, isLoggedIn, isAds, isFavorites}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage adCount={adCount} isLoggedIn={isLoggedIn} isAds={isAds} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritesPage isLoggedIn={isLoggedIn} isFavorites={isFavorites} />} />
        <Route path={AppRoute.Room} element={<PropertyPage isLoggedIn={isLoggedIn} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
