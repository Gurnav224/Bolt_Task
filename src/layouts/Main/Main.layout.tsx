import Helper from '@/libs/Helper.lib';
import styles from './Main.layout.module.scss';
import type { Props } from '@/types/shared.type';

export default function Main(props: Props<'div'>) {
  const { children, className } = props;
  return <main className={Helper.cn(styles.base, className)}>{children}</main>;
}
