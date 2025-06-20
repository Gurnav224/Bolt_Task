import Helper from '@/libs/Helper.lib';
import type { Props } from '@/types/shared.type';
import styles from './Puzzle.animation.module.scss';

export default function Puzzle(props: Props<'div'>) {
  const { className } = props;
  return (
    <div className={Helper.cn(styles.boxesWrapper, className)}>
      <div className={Helper.cn(styles.box, styles.red1)} />
      <div className={Helper.cn(styles.box, styles.red2)} />
      <div className={Helper.cn(styles.box, styles.red3)} />

      <div className={Helper.cn(styles.box, styles.black1)} />
      <div className={Helper.cn(styles.box, styles.black2)} />
      <div className={Helper.cn(styles.box, styles.black3)} />

      <div className={Helper.cn(styles.box, styles.yellow1)} />
      <div className={Helper.cn(styles.box, styles.yellow2)} />
    </div>
  );
}
