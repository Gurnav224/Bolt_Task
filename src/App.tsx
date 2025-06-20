import Layout from './layouts/Layout';
import { Outlet } from 'react-router-dom';
import Hook from './libs/Hook.lib';

export default function App() {
  Hook.usePathNormalizer();
  Hook.useScroll();

  return (
    <>
      <Layout.Header>
        <Layout.Navbar>NavBar</Layout.Navbar>
      </Layout.Header>
      <Layout.Main>
        <Outlet />
      </Layout.Main>
      <Layout.Footer>Footer</Layout.Footer>
    </>
  );
}
