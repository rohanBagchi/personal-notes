import Link from 'next/link';
import { useRouter } from 'next/router';
import links from './links';
import styles from './styles.module.css';

const SideBar = () => {
  const router = useRouter();
  const componentFileName = router.asPath.split('/').pop();

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
