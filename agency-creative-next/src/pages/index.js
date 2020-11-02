import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          title="Startup Agency Creative Landing"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
