import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import links from '../src/components/SideBar/links';
import CodeBlock from '../src/components/CodeBlock';

import '../styles/globals.css';
import './ProgressBarCSS.css';
import SideBar from '../src/components/SideBar';

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props) => <div {...props} style={{ overflow: 'auto' }} />,
  code: CodeBlock,
  // eslint-disable-next-line react/display-name
  img: (props) => (
    <img {...props} style={{ maxWidth: '100%' }} alt="description of concept" />
  ),
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const componentFileName = router.asPath.split('/').pop();
  const pageTitle = links.find(({ path }) => path === componentFileName)?.name;

  const [showSideBarInMobile, setShowSideBarInMobile] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={`sidebar ${showSideBarInMobile ? 'show-in-mobile' : ''}`}>
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setShowSideBarInMobile(true)}
        >
          Toggle Sidebar
        </button>
        <SideBar onLinkClick={() => setShowSideBarInMobile(false)} />
      </div>
      <div className={`content ${showSideBarInMobile ? 'hide-in-mobile' : ''}`}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </div>
  );
}

export default MyApp;
