import styles from './thumbnail.module.scss';

export default ({ children, image, title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
        {children}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.divider} />
    </div>
  );
};
