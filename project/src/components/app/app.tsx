import MainPage from '../main-page/main-page';

type AppProps = {
  adCount: number;
}

export default function App({adCount}: AppProps): JSX.Element {
  return <MainPage adCount={adCount} />;
}
