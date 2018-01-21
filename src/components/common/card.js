import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  card: {
    backgroundColor: '#FFFF',
    boxShadow: 'rgba(177, 80, 80, 0.2) 0px 2px 4px 0px',
    padding: '0.5em',
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif'
  }
};

const propTypes = {
  children: PropTypes.any
};

const defaultProps = {
  children: null
};

const Card = ({ children, style: overwriteStyles }) => (
  <div style={{ ...styles.card, ...overwriteStyles }}> {children} </div>
);

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Radium(Card);
