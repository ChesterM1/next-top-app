import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: Sort;
  setSort: (sort: Sort) => void;
}

export type Sort = keyof typeof SortType;
const SortType = {
  rating: 'rating',
  price: 'price',
} as const;
