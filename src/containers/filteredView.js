import { connect } from 'react-redux';

import { getQueriedArticles } from '../redux/modules/articles';
import articleFeed from '../components/articleFeed';

import WithFetch from './withFetch';

const mapStateToProps = state => ({
  articles: getQueriedArticles(state)
});

// const mapDispatchToProps = dispatch => ({ actions }, dispatch);

export default WithFetch(connect(mapStateToProps)(articleFeed));
