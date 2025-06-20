import Helper from '@/libs/Helper.lib';
import type { Props } from '@/types/shared.type';
import styles from './Footer.layout.module.scss';

export default function Footer(props: Props<'div'>) {
  const { children, className } = props;
  return (
    <footer className={Helper.cn(styles.base, className)}>{children}</footer>
  );
}
