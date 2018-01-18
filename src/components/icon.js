import React from 'react';
import PropTypes, { string } from 'prop-types';
import Radium from 'radium';

const styles = {
  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  path: {
    fill: 'black'
  }
};

const propTypes = {
  paths: PropTypes.arrayOf(string),
  size: PropTypes.number,
  color: PropTypes.string
};

const defaultProps = {
  paths: [],
  size: 16,
  color: styles.path.fill
};

export function Icon({ paths, color, size }) {
  return (
    <svg style={styles.svg} width={`${size}px`} height={`${size}px`} viewBox="0 0 1024 1024">
      {paths.map(path => (
        <path style={{ ...styles.path, fill: color }} d={path || ''} />
      ))}
    </svg>
  );
}


Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Radium(Icon);
