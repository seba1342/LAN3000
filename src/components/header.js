import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ isHome, siteTitle }) => (
  <header>
    {isHome ?
      <a className="header__link header__link--back" href="http://openforpublic.com/">←</a>
      :
      <Link className="header__link header__link--back" to="/">← <span role="img" aria-label="Stack of Books Emoji">📚</span></Link>
    }
    <h3>
      <Link to="/" className="header__link">{siteTitle}</Link>
    </h3>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
