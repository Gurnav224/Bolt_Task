import Animation from '@/animations/Animation';
import type { Props } from '@/types/shared.type';
import Component from '@/libs/Component.lib';

export default function HomeLayout(props: Props<'div'>) {
  const { children } = props;
  return (
    <>
      <Component.Seo
        title="Home"
        pageTitle="Home Page"
        description="Home Page"
      />
      <Animation.Page>{children}</Animation.Page>
    </>
  );
}
