import Store from '@/libs/Store.lib';
import Hook from '@/libs/Hook.lib';
import { useEffect } from 'react';
import styles from './Header.layout.module.scss';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';

export default function Header(props: Props<'header'>) {
  const [isVisible] = Hook.useHeaderController();
  const { children, className } = props;

  const setIsHeaderVisible = Store.useTheme((s) => s.setIsHeaderVisible);

  useEffect(() => {
    setIsHeaderVisible(isVisible);
  }, [isVisible, setIsHeaderVisible]);

  return (
    <header
      className={Helper.cn(
        styles.base,
        className,
        isVisible ? styles.visible : styles.notVisible
      )}
    >
      {children}
    </header>
  );
}
