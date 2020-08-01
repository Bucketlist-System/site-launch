import { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  return (
    <>
      <Header showNav={showNav} onHideNav={handleHideNav} onShowNav={handleShowNav} />
      <div className='layout-container'>
        {children}
        <style jsx>{`
          background-color: #fff;
        `}</style>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Layout;
