import { User } from './offer';

export type UserReview = {
  comment: string
  date: string
  id: number
  rating: number
  user: User
};
