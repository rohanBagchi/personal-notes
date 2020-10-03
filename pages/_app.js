import { useRouter } from 'next/router';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import links from '../src/components/SideBar/links';
import CodeBlock from './CodeBlock';

import '../styles/globals.css';
import './ProgressBarCSS.css';
import SideBar from '../src/components/SideBar';

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  img: (props) => <img {...props} style={{ maxWidth: '100%' }} />,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const componentFileName = router.asPath.split('/').pop();
  const pageTitle = links.find(({ path }) => path === componentFileName)?.name;
  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </div>
  );
}

export default MyApp;
