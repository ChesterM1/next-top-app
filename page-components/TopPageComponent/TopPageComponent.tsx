import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.interface';
import { Card, Htag, Tag } from '../../components';
import styles from './TopPageComponent.module.css';
import HHdata from '../../components/HHdata/HHdata';
import { TopLevelCategory } from '../../interfaces/page.interface';

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        )}
      </div>

      {firstCategory === TopLevelCategory.Course && <HHdata {...page.hh} />}
    </div>
  );
};

export default TopPageComponent;
