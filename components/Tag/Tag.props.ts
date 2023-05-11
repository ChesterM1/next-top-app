import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: 'red' | 'ghost' | 'gray' | 'green' | 'primary';
  size?: 's' | 'm';
  href?: string;
}
