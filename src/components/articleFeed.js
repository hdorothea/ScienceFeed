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
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(0, 0, 0)'
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
    {articles.map(({ title, abstract, img, id, url }) => (
      <a style={styles.link} href={url}>
        <ContentCard
          style={styles.item}
          key={id}
          imgUrl={img.url}
          mainText={abstract}
          headerText={title}
        />
      </a>
    ))}
  </div>
);

ArticleFeed.propTypes = propTypes;

ArticleFeed.defaultProps = defaultProps;

export default Radium(ArticleFeed);
