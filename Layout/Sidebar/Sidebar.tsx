import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Logo from '../TOP_APP_LOGO.svg';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
