import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import Hero from '../../components/hero/hero';
import Title from '../../components/title/title';
import Question from '../../components/faq/question';
import Answer from '../../components/faq/answer';

import styles from './services.module.scss';

const Services = () => {
  return (
    <Layout>
      <Hero image='/images/services-hero.jpg'>
        <Title>FAQ</Title>
      </Hero>
      <Container>
        <div className={styles.faq}>
          <Question>Are there any products or services to purchase right now?</Question>
          <Answer>
            The Bucketlist System will be available for purchase at the start of 2021. The full
            course and community experience is extensive to set up and ensure you get the best
            experience possible.
          </Answer>

          <Question>Why is everything free right now?</Question>
          <Answer></Answer>

          <Question>When is the launch projected to begin?</Question>
          <Answer></Answer>

          <Question>What does the process include?</Question>
          <Answer></Answer>

          <Question>What are you going to do with my email?</Question>
          <Answer></Answer>

          <Question>How do I know if I am the right fit for the Bucketlist system?</Question>
          <Answer></Answer>

          <Question>What is in the free course?</Question>
          <Answer></Answer>

          <Question>
            How is the pricing and products structured? What is the 'You + One'?
          </Question>
        </div>
      </Container>
    </Layout>
  );
};

export default Services;
