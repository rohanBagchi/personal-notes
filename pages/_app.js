import { useRouter } from 'next/router';
import Head from 'next/head';
import links from '../src/components/SideBar/links';

import '../styles/globals.css';
import './ProgressBarCSS.css';
import SideBar from '../src/components/SideBar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const componentFileName = router.asPath.split('/').pop();
  const pageTitle = links.find(({ path }) => path === componentFileName).name;
  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
