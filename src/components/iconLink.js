import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Icon from './icon';

const propTypes = {
  path: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired
};

const defaultProps = {};

const IconLink = ({ iconPath, path, location }) => (
  <Link to={path}>
    <Icon color={location.pathname === path ? 'black' : 'grey'} paths={iconPath} />
  </Link>
);

IconLink.propTypes = propTypes;

IconLink.defaultProps = defaultProps;

export default withRouter(IconLink);
