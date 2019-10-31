import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <header>
    <Link className="header__link header__link--back" to="/"><span role="img" aria-label="Stack of Books Emoji">📚</span></Link>
    <Link to="/" className="header__link header__link--url">selfhelpbooks.club</Link>
  </header>
);

export default Header;
