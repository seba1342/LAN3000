import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/index.scss';

const Layout = ({ children }) => {

  return (
    <>
      <div className="container">
        <Header />
        <div className="layout">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
