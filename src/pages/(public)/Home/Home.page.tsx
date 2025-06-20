import Helper from '@/libs/Helper.lib';
import HomeLayout from './Home.layout';
import styles from './Home.page.module.scss';

export default function Home() {
  return (
    <HomeLayout>
      <h1 className={Helper.cn(styles.title)}>Home Page</h1>
    </HomeLayout>
  );
}
