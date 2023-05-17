import type { ReactElement } from 'react';
import Layout from 'components/layout';
import type { NextPageWithLayout } from './_app';
import ScanProduct from './find-product';

const Page: NextPageWithLayout = () => {
  return <ScanProduct />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Page;