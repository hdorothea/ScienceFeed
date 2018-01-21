import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import ContentCard from './contentCard';

const styles = {
  articleFeed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    marginBottom: '1.2rem'
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
    {articles.map(({ title, abstract, img, id }) => (
      <ContentCard
        style={styles.item}
        key={id}
        imgUrl={img.url}
        mainText={abstract}
        headerText={title}
      />
    ))}
  </div>
);

ArticleFeed.propTypes = propTypes;

ArticleFeed.defaultProps = defaultProps;

export default Radium(ArticleFeed);
