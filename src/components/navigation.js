import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Icon from './icon';
import IconLink from './iconLink';

const styles = {
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1em'
  }
};

const propTypes = {
  options: PropTypes.array,
  style: PropTypes.object
};

const defaultProps = {
  options: [],
  style: {}
};

export function Navigation({ options, style: overwriteStyles }) {
  return (
    <div style={{ ...styles.navigation, ...overwriteStyles }}>
      {options.map(
        ({ path, iconPath, name }) =>
          (path ? <IconLink key={name} path={path} iconPath={iconPath} /> : <Icon paths={iconPath} />)
      )}
    </div>
  );
}

Navigation.propTypes = propTypes;

Navigation.defaultProps = defaultProps;

export default Radium(Navigation);
