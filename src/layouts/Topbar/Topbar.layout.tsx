import Helper from '@/libs/Helper.lib';
import styles from './Topbar.module.scss';

export default function Topbar() {
  return <nav className={Helper.cn(styles.base)}></nav>;
}
