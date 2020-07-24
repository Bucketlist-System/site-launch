import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Subtitle from '../../components/subtitle/subtitle';

import styles from './privacy.module.scss';

const Privacy = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Subtitle>Privacy Policy</Subtitle>
          <p>
            What information do we collect? We collect information from you when you register
            on our site, subscribe to our newsletter, or fill out a form. Any data we request
            that is not required will be specified as voluntary or optional. When ordering or
            registering on our site, as appropriate, you may be asked to enter your name,
            e-mail, address, phone number for Final Expense Specialist. You may, however, visit
            our site anonymously. Like most websites, we use cookies to enhance your
            experience, gather general visitor information, and track visits to our website.
            Please refer to the ‘do we use cookies?’ section below for information about
            cookies and how we use them.
          </p>
          <p>
            What do we use your information for? Any of the information we collect from you may
            be used in the following ways:
          </p>
          <ul>
            <li>
              To personalize your experience (your information helps us to better respond to
              your individual needs)
            </li>
            <li>
              To improve our website (we continually strive to improve our website offerings
              based on the information and feedback we receive from you)
            </li>
            <li>
              To improve customer service (your information helps us to more effectively
              respond to your customer service requests and support needs)
            </li>
            <li>To send periodic emails</li>
          </ul>
          <p>
            How do we protect your information? We implement a variety of security measures to
            maintain the safety of your personal information when you submit a request or
            enter, submit, or access your personal information. These security measures include
            password protected directories and databases to safeguard your information, SSL
            (Secure Sockets Layered) technology to ensure that your information is fully
            encrypted and sent across the internet securely, or PCI Scanning to actively
            protect our servers from hackers and other vulnerabilities
          </p>
          <p>
            We offer the use of a secure server. All supplied sensitive/credit information is
            transmitted via Secure Sockets Layer (SSL) technology and then encrypted into our
            database to be accessed only by those who are authorized with special access rights
            to our systems and are required to keep the information confidential. After a
            transaction, your private information (credit cards, Social Security numbers,
            financials, etc.) will not be stored on our servers.
          </p>
          <p>
            Do we use cookies? Yes. Cookies are small files that a site or its service provider
            transfers to your computer’s hard drive through your Web browser (if you allow)
            that enables the site’s or service provider’s systems to recognize your browser and
            capture and remember certain information.
          </p>
          <p>
            Do we disclose any information to outside parties? We do not sell, trade, or
            otherwise transfer to outside parties your personally identifiable information.
            This does not include trusted third parties who assist us in operating our website,
            conducting our business, or servicing you, as long as those parties agree to keep
            this information confidential. We may also release your information when we believe
            release is appropriate to comply with the law, enforce our site policies, or
            protect ours or others’ rights, property, or safety. However, non-personally
            identifiable visitor information may be provided to other parties for marketing,
            advertising, or other uses.
          </p>
          <div className={styles.subhead}>Third-party Links</div>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or
            services on our website. These third-party sites have separate and independent
            privacy policies. We, therefore, have no responsibility or liability for the
            content and activities of these linked sites. Nonetheless, we seek to protect the
            integrity of our site and welcome any feedback about these sites.
          </p>
          <div className={styles.subhead}>
            Children's Online Privacy Protection Act Compliance
          </div>
          <p>
            We are in compliance with the requirements of COPPA (Children’s Online Privacy
            Protection Act); we do not collect any information from anyone under 18 years of
            age. Our website, products, and services are all directed to people who are at
            least 18 years old.
          </p>
          <div className={styles.subhead}>CAN-SPAM Compliance</div>
          <p>
            We have taken the necessary steps to ensure that we are compliant with the CAN-SPAM
            Act of 2003 by never sending out misleading information.
          </p>
          <div className={styles.subhead}>Online Privacy Policy Only</div>
          <p>
            This online privacy policy applies only to information collected through our
            website and not to information collected offline.
          </p>
          <div className={styles.subhead}>Changes to Our Privacy Policy</div>
          <p>
            If we decide to change our privacy policy, we will post those changes on this page,
            and/or update the Privacy Policy modification date below. Policy changes will apply
            only to information collected after the date of the change.
          </p>
          <p>This policy was last modified on July, 21 2020</p>

          <div className={styles.subhead}>Privacy Policy Customer Pledge</div>
          <p>
            We pledge to you, our customer, that we have made a dedicated effort to bring our
            privacy policy in line with the following important privacy laws and initiatives:
          </p>
          <p>Federal Trade Commission Fair Information Practices</p>
          <p>Children’s Online Privacy Protection Act</p>
          <p>Privacy Alliance and Marketing Act</p>
        </div>
      </Container>
    </Layout>
  );
};

export default Privacy;
