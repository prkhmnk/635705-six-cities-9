import { MAX_RATING } from '../const';

export const getRating = (rating: number): number => (Math.round(rating) / MAX_RATING) * 100;

export const capitalize = (str: string): string => !str ? str : str[0].toUpperCase() + str.slice(1);
