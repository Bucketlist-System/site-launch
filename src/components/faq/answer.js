import styles from './answer.module.scss';

export default ({ children }) => (
  <div className={styles.root}>
    <p>{children}</p>
  </div>
);
