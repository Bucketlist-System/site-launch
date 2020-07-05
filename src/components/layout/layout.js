import { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  console.log('showNav: ', showNav);
  return (
    <>
      <Header showNav={showNav} onHideNav={handleHideNav} onShowNav={handleShowNav} />
      <div className='layout-container'>
        {children}
        <style jsx>{`
          height: 50vh;
          background-color: #fff;
          .layout-container {
            padding: 120px 0;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
