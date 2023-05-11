import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({ children, size = 's', className, color = 'ghost', href, ...props }: TagProps): JSX.Element => (
  <div
    className={cn(styles.tag, className, {
      [styles.red]: color === 'red',
      [styles.green]: color === 'green',
      [styles.grey]: color === 'gray',
      [styles.primary]: color === 'primary',
      [styles.ghost]: color === 'ghost',
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
    })}
    {...props}>
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
);
