import Helper from '@/libs/Helper.lib';
import styles from './Page.animation.module.scss';
import type { Props } from '@/types/shared.type';

export default function Page(props: Props<'div'>) {
  const { children, className } = props;
  return <div className={Helper.cn(styles.base, className)}>{children}</div>;
}
