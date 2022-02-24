import { useState } from 'react';
import { RentalHousingOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: RentalHousingOffer[],
}

export default function PlacesList({ offers }: PlacesListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState({});

  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((item) => (
        <PlaceCard
          offer={item}
          key={item.id}
          mouseOverHandler={() => {
            setActiveCard({ ...(activeCard as object), ...(item as object) });
          }}
          mouseOutHandler={() => {
            setActiveCard({});
          }}
        />))}
    </div>
  );
}
