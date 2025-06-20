import Helper from '@/libs/Helper.lib';
import styles from './Aside.layout.module.scss';
import type { Props } from '@/types/shared.type';

export default function Aside(props: Props<'div'>) {
  const { children, className } = props;
  return (
    <aside className={Helper.cn(styles.base, className)}>{children}</aside>
  );
}
