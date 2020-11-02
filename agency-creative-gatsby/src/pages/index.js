import React from 'react';
import { StickyProvider } from '../contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Feature from '../sections/feature';
import BusinessProfit from '../sections/business-profit';
import Knowledge from '../sections/knowledge';
import ClientFeedback from '../sections/client-feedback';
import WorkFlow from '../sections/workflow';
import Support from '../sections/support';

// Load other package css file
import 'rc-drawer/assets/index.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Startup Business Landing Gatsby" />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>
    </StickyProvider>
  );
}
