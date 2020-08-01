import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import Title from '../../components/title/title';
import Subtitle from '../../components/subtitle/subtitle';
import Hero from '../../components/hero/hero';

import styles from './education.module.scss';

const Education = () => {
  return (
    <Layout>
      <Hero image={'/images/education-kuma-kum.jpg'}>
        <Title>Podcasts</Title>
      </Hero>
      <Container>
        <Subtitle>Welcome to the Dream With Me Podcast</Subtitle>
        <div className={styles.intro}></div>
        <div className={styles.podcast}>
          <iframe
            src='https://anchor.fm/ryan-morimoto/embed/episodes/001-The-1-Unstoppable-Force-to-Sustain-New-Habits-eg9fmj'
            height='35%'
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
