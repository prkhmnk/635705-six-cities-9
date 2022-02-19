import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/main-page';

type AppProps = {
  adCount: number,
  isLoggedIn: boolean,
  isAds: boolean
}

export default function App({adCount, isLoggedIn, isAds}: AppProps): JSX.Element {
  return <MainPage adCount={adCount} isLoggedIn={isLoggedIn} isAds={isAds} />;
}
