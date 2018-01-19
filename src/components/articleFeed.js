import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import ContentCard from './contentCard';

const styles = {
  articleFeed: {
    display: 'flex',
    flexDirection: 'column'
  }
};

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object
};

const defaultProps = {
  style: {}
};

const ArticleFeed = ({ articles, style: overwriteStyles }) => (
  <div style={{ ...styles.articleFeed, ...overwriteStyles }}>
    {articles.map(({ title, abstract, headerImg }) => (
      <ContentCard imgUrl={headerImg} mainText={abstract} headerText={title} />
    ))}
  </div>
);

ArticleFeed.propTypes = propTypes;

ArticleFeed.defaultProps = defaultProps;

export default Radium(ArticleFeed);
