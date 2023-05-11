import React from 'react';
import styles from './HHdata.module.css';
import { HHdataProps } from './HHdata.interface';
import cn from 'classnames';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';

const HHdata = ({ count, juniorSalary, middleSalary, seniorSalary }: HHdataProps) => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.stat}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={styles.title}>Срейдний</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HHdata;
