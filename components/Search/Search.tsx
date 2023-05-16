import React, { useState, KeyboardEvent } from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.interface';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = useState<string>();
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск.."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={handleKeyDown}
      />
      <Button className={styles.button} appearance="primary" onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};
