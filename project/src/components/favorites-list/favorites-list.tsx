import { Fragment } from 'react';
import { RentalHousingOffer } from '../../types/offer';
import FavoritesPlaces from '../favorites-places/favorites-places';

type FavoritesListProps = {
  offers: RentalHousingOffer[],
}

export default function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));

  return (
    <Fragment>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="!#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <FavoritesPlaces offers={offers.filter((offer) => offer.city.name === city)} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
