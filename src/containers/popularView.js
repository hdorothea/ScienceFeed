import { connect } from 'react-redux';

import { getArticles } from '../redux/modules/articles';
import articleFeed from '../components/articleFeed';

import WithFetch from './withFetch';

const mapStateToProps = state => ({
  articles: getArticles(state)
});

// const mapDispatchToProps = dispatch => ({ actions }, dispatch);

export default WithFetch(connect(mapStateToProps)(articleFeed));
