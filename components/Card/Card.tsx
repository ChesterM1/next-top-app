import React from 'react';
import { CardProps } from './Card.interface';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(className, styles.card, {
        [styles.blue]: color === 'blue',
        [styles.white]: color === 'white',
      })}
      {...props}>
      {children}
    </div>
  );
};
