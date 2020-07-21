import { useState } from 'react';

import styles from './subheader.module.scss';

export default () => {
  const initialState = {
    pod: 'Podcasts',
    art: 'Articles',
    vid: 'Videos',
    work: 'Worksheets',
  };

  const [sub, setSub] = useState(initialState);

  const { pod, art, vid, work } = sub;

  const filterContent = (e) => {
    e.preventDefault();
    const current = e.target.value;
  };

  return (
    <nav className={styles.subHeader}>
      <div>
        <button onClick={(e) => filterContent(e)}>{pod}</button>
      </div>
      <div>
        <button onClick={(e) => filterContent(e)}>{art}</button>
      </div>
      <div>
        <button onClick={(e) => filterContent(e)}>{vid}</button>
      </div>
      <div>
        <button onClick={(e) => filterContent(e)}>{work}</button>
      </div>
    </nav>
  );
};
