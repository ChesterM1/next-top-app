import React from 'react';
import styles from './AdvantagesItem.module.css';
import { AdvantagesItemProps } from './AdvantagesItem.interface';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import CheckedIcon from './checked.svg';

export const AdvantagesItem = ({ _id, description, title }: AdvantagesItemProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <CheckedIcon className={styles.icons} />
      <div className={styles.divider}></div>

      <Htag tag="h3" className={styles.title}>
        {title}
      </Htag>
      <P className={styles.text}>{description}</P>
    </div>
  );
};
