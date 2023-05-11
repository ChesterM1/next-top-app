import React from 'react';
import { withLayout } from '../../Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import axios from 'axios';
import { firstLevelMenu } from '../../helpers/helpers';

const Type = ({ firstCategory }: TypeProps) => {
  return <h1>Index Page: {firstCategory}</h1>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id,
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps {
  menu: MenuItem[];
  firstCategory: number;
}
