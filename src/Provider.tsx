import { Slide, ToastContainer as ToastProvider } from 'react-toastify';
import { StrictMode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import Store from './libs/Store.lib';
import { Case, Default, Switch } from 'react-if';
import PublicRouter from './routers/Public.router';
import PrivateRouter from './routers/Private.router';

export default function Provider() {
  const theme = Store.useTheme((s) => s.theme);

  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <html data-theme={theme} />
        </Helmet>
        <ToastProvider
          theme={theme || ''}
          style={{ fontSize: '14px' }}
          toastStyle={{
            backgroundColor: 'var(--color-background)',
            color: 'var(--gray-12)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          transition={Slide}
        />
        <Switch>
          <Case condition={false}>
            <RouterProvider router={PublicRouter} />
          </Case>
          <Case condition={true}>
            <RouterProvider router={PrivateRouter} />
          </Case>
          <Default>
            <div>Something Went Wrong</div>
          </Default>
        </Switch>
      </HelmetProvider>
    </StrictMode>
  );
}
