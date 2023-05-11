import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.interface';
import { Htag, Tag, AdvantagesItem, P } from '../../components';
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

      {firstCategory === TopLevelCategory.Course && page.hh && <HHdata {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2" className={styles.advantages}>
            Преимущества
          </Htag>
          {page.advantages.map((a) => (
            <AdvantagesItem key={a._id} {...a} />
          ))}
        </>
      )}

      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      <Htag tag="h2" className={styles.skills}>
        Получаемые навыки
      </Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
