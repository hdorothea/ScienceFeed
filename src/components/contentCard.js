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
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontFamily: 'Times New Roman, Times, serif'
  },
  img: {
    maxWidth: '90%'
  },
  mainText: {
    lineHeight: '1.5em',
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif'
  }
};

const propTypes = {
  headerText: PropTypes.string,
  imgUrl: PropTypes.string,
  mainText: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  headerText: null,
  imgUrl: null,
  mainText: null,
  style: {}
};

const ContentCard = ({ headerText, imgUrl, mainText, style: overwriteStyles }) => (
  <Card style={overwriteStyles}>
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
