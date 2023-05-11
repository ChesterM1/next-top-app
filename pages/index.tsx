import { GetStaticProps } from 'next/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Htag, Button, P, Tag, Rating,
} from '../components';
import { withLayout } from '../Layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);
  return (
        <>
            <Htag tag="h1">hello World</Htag>
            <Button appearance="ghost" arrow={'right'}>
                on Click...
            </Button>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate fugit quaerat voluptatem non fugiat voluptate ea cum.
                Sit ipsam rerum rem blanditiis, fugit eveniet incidunt?
            </P>
            <Tag size="S" color="red">
                red
            </Tag>
            <Tag size="M" color="ghost">
                ghost
            </Tag>
            <Tag size="M" color="green">
                Green
            </Tag>
            <Tag color="primary">primary</Tag>
            <Tag color="grey" href="google.com">
                gray
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <ul>
                {menu.map((m) => (
                    <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
                ))}
            </ul>
        </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
