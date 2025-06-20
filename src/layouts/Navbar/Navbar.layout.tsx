import Helper from '@/libs/Helper.lib';
import styles from './Navbar.layout.module.scss';
import type { Props } from '@/types/shared.type';

export default function Navbar(props: Props<'div'>) {
  const { children, className } = props;
  return <nav className={Helper.cn(className, styles.base)}>{children}</nav>;
}
