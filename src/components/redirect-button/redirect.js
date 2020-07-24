import Link from 'next/link';
import styles from './redirect.module.scss';

export default ({ children, redirectTo }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <Link href={redirectTo}>
        <a>{children}</a>
      </Link>
    </div>
  </div>
);
