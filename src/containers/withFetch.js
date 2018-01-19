import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchArticles, areThereArticles } from '../redux/modules/articles';
import { isFetching } from '../redux/modules/fetch';

export default function WithFetch(WrappedComponent) {
  const propTypes = {
    areThereArticles: PropTypes.bool,
    fetchArticles: PropTypes.func,
    isFetching: PropTypes.bool
  };

  const defaultProps = {
    areThereArticles: false,
    isFetching: false,
    fetchArticles: () => null
  };

  class Fetch extends Component {
    componentDidMount() {
      const { areThereArticles, isFetching } = this.props;
      console.log(areThereArticles);
      console.log(isFetching);
      if (!areThereArticles && !isFetching) {
        this.props.fetchArticles();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  Fetch.propTypes = propTypes;

  Fetch.defaultProps = defaultProps;

  const mapStateToProps = state => ({
    areThereArticles: areThereArticles(state),
    isFetching: isFetching(state)
  });

  const mapDispatchToProps = dispatch => ({
    fetchArticles: () => dispatch(fetchArticles(process.env.REACT_APP_API_KEY))
  });

  return connect(mapStateToProps, mapDispatchToProps)(Fetch);
}
