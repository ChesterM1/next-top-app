import React from 'react';
import SortIcon from './sort.svg';
import cn from 'classnames';
import styles from './Sort.module.css';
import { SortProps } from './Sort.interface';

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div
        className={cn(styles.rating, {
          [styles.active]: sort === 'rating',
        })}
        onClick={() => setSort('rating')}>
        <SortIcon />
        <span>По рейтингу</span>
      </div>
      <div
        className={cn(styles.price, {
          [styles.active]: sort === 'price',
        })}
        onClick={() => setSort('price')}>
        <SortIcon />
        <span>По цене</span>
      </div>
    </div>
  );
};
