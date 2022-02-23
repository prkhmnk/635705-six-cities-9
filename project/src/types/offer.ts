export type User = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type OfferLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type OfferCity = {
  location: OfferLocation,
  name: string,
};

export type RentalHousingOffer = {
  bedrooms: number,
  city: OfferCity,
  description: string,
  goods: string[],
  host: User,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: OfferLocation,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};
