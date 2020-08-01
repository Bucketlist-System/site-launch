import styles from './question.module.scss';

export default ({ children }) => (
  <div className={styles.root}>
    <p>{children}</p>
  </div>
);
