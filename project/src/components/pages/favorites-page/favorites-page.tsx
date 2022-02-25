import { Fragment } from 'react';
import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';
import Footer from '../../footer/footer';
import { useLocation } from 'react-router-dom';
import { RentalHousingOffer } from '../../../types/offer';

type FavoritesPageProps = {
  isLoggedIn: boolean,
  isFavorites: boolean,
  offers: RentalHousingOffer[],
}

export default function FavoritesPage({ isLoggedIn, isFavorites, offers }: FavoritesPageProps): JSX.Element {
  return (
    <div className={`page ${!isFavorites && 'page--favorites-empty'}`}>
      <p>{[useLocation().pathname]}</p>
      <Header isLoggedIn={isLoggedIn} />
      <main className={`page__main page__main--favorites ${!isFavorites && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${!isFavorites && 'favorites--empty'}`}>
            {isFavorites ? (
              <FavoritesList offers={offers} />
            ) : (
              <Fragment>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </Fragment>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
