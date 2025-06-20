import Helper from '@/libs/Helper.lib';
import styles from './FadeIn.module.scss';
import type { Props } from '@/types/shared.type';

export default function FadeIn(props: Props<'div'>) {
  const { children, className } = props;
  return <div className={Helper.cn(styles.base, className)}>{children}</div>;
}
