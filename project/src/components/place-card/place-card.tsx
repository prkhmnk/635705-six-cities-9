import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { RentalHousingOffer } from '../../types/offer';
import { getRating, capitalize } from '../../utils/utils';

type PlaceCardProps = {
  offer: RentalHousingOffer,
  mouseOverHandler: MouseEventHandler<HTMLElement> | undefined
  mouseOutHandler: MouseEventHandler<HTMLElement> | undefined
}

export default function PlaceCard({ offer, mouseOverHandler, mouseOutHandler }: PlaceCardProps): JSX.Element {

  const { isFavorite, isPremium, images, price, rating, title, type } = offer;

  return (
    <article
      className='cities__place-card place-card'
      onMouseEnter={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${offer.id}`}>
          <img
            className='place-card__image'
            src={images[0]}
            width='260'
            height='200'
            alt={type}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${getRating(rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{capitalize(type)}</p>
      </div>
    </article>
  );
}
