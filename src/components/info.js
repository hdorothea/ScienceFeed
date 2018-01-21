import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Card from './common/card';

const styles = {
  infoContent: {
    minHeight: '300px',
  }
};
const propTypes = {};

const defaultProps = {};

const Info = () => (
  <Card>
    <div style={styles.infoContent}>
      This is a hobby project! You can find the code on{' '}
      <a href="https://github.com/hdorothea/ScienceFeed">github</a>
    </div>
  </Card>
);

Info.propTypes = propTypes;

Info.defaultProps = defaultProps;

export default Radium(Info);
