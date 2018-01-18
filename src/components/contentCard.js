import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Card from './common/card';

const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: '2em',
    fontWeight: 'bold'
  },
  img: {
    maxWidth: '90%'
  },
  mainText: {}
};

const propTypes = {
  headerText: PropTypes.string,
  imgUrl: PropTypes.string,
  mainText: PropTypes.string
};

const defaultProps = {
  headerText: null,
  imgUrl: null,
  mainText: null
};

const ContentCard = ({ headerText, imgUrl, mainText }) => (
  <Card>
    <div style={styles.contentContainer}>
      {headerText ? <div style={styles.headerText}> {headerText} </div> : null}
      {mainText ? <div style={styles.mainText}> {mainText}</div> : null}
      {imgUrl ? <img alt="" style={styles.img} src={imgUrl} /> : null}
    </div>
  </Card>
);

ContentCard.propTypes = propTypes;

ContentCard.defaultProps = defaultProps;

export default Radium(ContentCard);
