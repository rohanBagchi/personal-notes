import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import links from './links';
import styles from './styles.module.css';

const SideBar = ({ onLinkClick }) => {
  const router = useRouter();
  const componentFileName = router.asPath.split('/').pop();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      onLinkClick();
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [onLinkClick, router.events]);

  const renderContent = () =>
    links.map((link, index) => (
      <li
        key={index}
        className={`${styles.listItem} ${
          componentFileName === link.path ? styles.active : ''
        }`}
      >
        <Link href={link.path}>
          <a className={styles.link}>{link.name}</a>
        </Link>
      </li>
    ));

  return <ul className={styles.list}>{renderContent()}</ul>;
};

export default SideBar;
