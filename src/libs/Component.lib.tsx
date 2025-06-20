import { useEffect, useState } from 'react';
import type { Maybe, Props } from '@/types/shared.type';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Store from './Store.lib';

type P = {
  Loader: React.ElementType;
  preloadFn: (...args: any) => Promise<any>;
  objToPreload: any;
};

function PreLoadGate(props: Props<'div', P>) {
  const { children, Loader, preloadFn, objToPreload } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    preloadFn(objToPreload).then(() => {
      setIsReady(() => true);
    });

    // Optional: add a max timeout fallback (e.g., 3s)
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [preloadFn, objToPreload]);

  return isReady ? <>{children}</> : <Loader />;
}

type SeoProps = {
  title: Maybe<string>;
  pageTitle: Maybe<string>;
  description: Maybe<string>;
};

function Seo(props: Props<'div', SeoProps>) {
  const { title, pageTitle, description } = props;
  const setTitle = Store.useApp((s) => s.setTitle);
  const setPageTitle = Store.useApp((s) => s.setPageTitle);
  const { pathname } = useLocation();

  useEffect(() => {
    setTitle(title);
    setPageTitle(pageTitle);
  }, [setTitle, setPageTitle, pathname, title, pageTitle]);
  return (
    <Helmet
      prioritizeSeoTags
      title={title ? `${title} | ai-eryany` : 'ai-eryany'}
      defaultTitle="Aiman Al Eryany"
    >
      <meta name="description" content={description || ''} />
    </Helmet>
  );
}

const Component = {
  PreLoadGate,
  Seo,
};

export default Component;
