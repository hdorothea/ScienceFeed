import React from 'react';
import { headerGrey } from '../styleConsts';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const styles = {
  header: {
    fontFamily: ['UnifrakturCook', 'cursive'],
    fontSize: '3em',
    color: headerGrey,
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    paddingRight: '0.5em'
  },
  link: {
    textDecoration: 'none'
  }
};

// const propTypes = {};

// const defaultProps = {};

const Header = () => (
  <Link style={styles.link} to="/">
    <div style={styles.header}>ScienceFeed</div>
  </Link>
);

// Header.propTypes = propTypes;

// Header.defaultProps = defaultProps;

export default Header;
