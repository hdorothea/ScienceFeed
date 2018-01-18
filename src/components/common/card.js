import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  card: {
    backgroundColor: '#FFFF',
    boxShadow: 'rgba(0, 0, 0, 0.13) 2px 2px 0px 0px',
    width: '90%',
    padding: '0.5em',
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const propTypes = {
  children: PropTypes.any
};

const defaultProps = {
  children: null
};

const Card = ({ children }) => <div style={styles.card}> {children} </div>;

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Radium(Card);
