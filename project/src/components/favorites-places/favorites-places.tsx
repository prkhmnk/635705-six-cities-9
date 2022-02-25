import { RentalHousingOffer } from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';

type FavoritesPlacesProps = {
  offers: RentalHousingOffer[],
}

export default function FavoritesPlaces({ offers }: FavoritesPlacesProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((item) => <FavoritesCard offer={item} key={item.id} />)}
    </div>
  );
}
