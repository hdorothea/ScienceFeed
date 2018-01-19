import { connect } from 'react-redux';

import React from 'react';
import PropTypes from 'prop-types';

import { getQueriedArticles } from '../redux/modules/articles';
import { updateQueryString } from '../redux/modules/filter';
import ArticleFeed from '../components/articleFeed';
import WithFetch from './withFetch';
import QueryInput from '../components/queryInput';

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  updateQueryString: PropTypes.func
};

const defaultProps = { articles: [], updateQueryString: () => null };

const FilteredView = ({ articles, updateQueryString }) => (
  <div>
    <QueryInput onSubmit={updateQueryString} />
    <ArticleFeed articles={articles} />
  </div>
);

FilteredView.propTypes = propTypes;

FilteredView.defaultProps = defaultProps;

const mapStateToProps = state => ({
  articles: getQueriedArticles(state)
});

const mapDispatchToProps = dispatch => ({
  updateQueryString: query => dispatch(updateQueryString(query))
});

export default WithFetch(connect(mapStateToProps, mapDispatchToProps)(FilteredView));
