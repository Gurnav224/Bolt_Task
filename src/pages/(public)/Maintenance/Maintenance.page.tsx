import Helper from '@/libs/Helper.lib';
import MaintenanceLayout from './Maintenance.layout';
import Store from '@/libs/Store.lib';
import styles from './Maintenance.page.module.scss';
import { Navigate } from 'react-router-dom';
import Constants from '@/Constants';

export default function Maintenance() {
  const isUnderMaintenance = Store.useApp((s) => s.isUnderMaintenance);

  if (!isUnderMaintenance)
    return <Navigate to={Constants.routes.public.notFound.url} replace />;

  return (
    <MaintenanceLayout>
      <div className={Helper.cn(styles.area)}>
        <ul className={Helper.cn(styles.circles)}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={Helper.cn(styles.titleBox)}>
          <h1>Page is Under Construction</h1>
        </div>
      </div>
    </MaintenanceLayout>
  );
}
