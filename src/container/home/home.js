import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Hero from '../../components/hero/hero';
import Title from '../../components/title/title';
import Thumbnail from '../../components/thumbnail/thumbnail';
import Redirect from '../../components/redirect-button/redirect';

import styles from './home.module.scss';

import Quiz from '../../components/quiz/quiz';

const Home = () => {
  return (
    <Layout>
      <Hero image='/images/home-hero.jpg' style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
        <Title>Let's sustain a purposeful change in your life</Title>
      </Hero>
      <Container>
        <div className={styles.content}>
          <p>We help you sustain change by...</p>
          <p>Clarifying Your Vision</p>
          <p>Implementing Habits</p>
          <p>Building Accountability</p>
          <div className={styles.start}>Start here.</div>
        </div>
        <div className={styles.links}>
          <Thumbnail
            image='/images/services-joshua-ness.jpg'
            title='Our Coaching Process'
            description='Get to know our process. Learn more about how our program works and which plan is right for you.'
          >
            <Redirect redirectTo='/services'>Learn More</Redirect>
          </Thumbnail>
          <Thumbnail
            image='/images/education-kuma-kum.jpg'
            title='Open Source Education'
            description='Articles, podcasts, videos, and templates, curated for everyone to digest anytime, anywhere'
          >
            <Redirect redirectTo='/education'>Learn More</Redirect>
          </Thumbnail>
        </div>
      </Container>
      <Quiz />
    </Layout>
  );
};

export default Home;
