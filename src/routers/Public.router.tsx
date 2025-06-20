import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '@/App';
import Page from '@/pages/Page';
import Handler from '@/Handler';
import Constants from '@/Constants';

const homePage: RouteObject = {
  index: true,
  element: <Page.Public.Home />,
};

const aboutPage: RouteObject = {
  path: Constants.routes.public.about.url,
  element: <Page.Public.About />,
};

const contactPage: RouteObject = {
  path: Constants.routes.public.contact.url,
  element: <Page.Public.About />,
};

const notFoundPage: RouteObject = {
  path: Constants.routes.public.notFound.url,
  element: <Page.Public.NotFound />,
};

const maintenancePage: RouteObject = {
  path: Constants.routes.public.maintenance.url,
  element: <Page.Public.Maintenance />,
};

const testPage: RouteObject = {
  path: Constants.routes.public.test.url,
  element: <Page.Public.Test />,
};

const loginPage: RouteObject = {
  path: Constants.routes.public.login.url,
  element: <Page.Public.Login />,
};

const publicRoute: RouteObject = {
  path: Constants.routes.public.home.url,
  element: <App />,
  errorElement: <Handler />,
  children: [
    homePage,
    aboutPage,
    contactPage,
    notFoundPage,
    maintenancePage,
    loginPage,
    testPage,
  ],
};

const PublicRouter = createBrowserRouter([publicRoute]);

export default PublicRouter;
