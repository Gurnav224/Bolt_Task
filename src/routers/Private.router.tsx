import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '@/App';
import Constants from '@/Constants';
import Page from '@/pages/Page';
import Handler from '@/Handler';

const homePage: RouteObject = {
  index: true,
  element: <Navigate to={Constants.routes.private.dashboard.url} replace />,
};

const dashboardPage: RouteObject = {
  path: Constants.routes.private.dashboard.url,
  element: <Page.Private.Dashboard />,
};

const notFoundPage: RouteObject = {
  path: Constants.routes.public.notFound.url,
  element: <Page.Public.NotFound />,
};

const privateRoute: RouteObject = {
  path: Constants.routes.private.index.url,
  element: <App />,
  errorElement: <Handler />,
  children: [homePage, dashboardPage, notFoundPage],
};

const PrivateRouter = createBrowserRouter([privateRoute]);

export default PrivateRouter;
