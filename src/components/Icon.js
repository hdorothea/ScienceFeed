import React from 'react';
import PropTypes from 'prop-types';

// an Icon renders the icon path handed to it.
export default function Icon(props) {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      {props.paths.map(path => <path style={styles.path} d={path || ''} />)}
    </svg>
  );
}

Icon.propTypes = {
  paths: PropTypes.array.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: 'black',
};
