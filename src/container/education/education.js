import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import Subheader from '../../components/subheader/subheader';

import Hero from '../../components/hero/hero';

import styles from './education.module.scss';

const Education = () => {
  return (
    <Layout>
      <Hero image={'/images/education-kuma-kum.jpg'}></Hero>
      {/* <div className={styles.subNav}>
        <Subheader />
        <input type='text' placeholder={`Search`} />
      </div> */}
      <Container>
        <div className={styles.podcast}>
          <iframe
            src='https://anchor.fm/ryan-morimoto/embed/episodes/001-The-1-Unstoppable-Force-to-Sustain-New-Habits-eg9fmj'
            height='25%'
            width='100%'
            frameborder='0'
            scrolling='no'
          ></iframe>
        </div>
      </Container>
    </Layout>
  );
};

export default Education;
