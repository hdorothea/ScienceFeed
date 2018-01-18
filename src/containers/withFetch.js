import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchArticles } from '../redux/modules/articles';

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
    areThereArticles: state.areThereArticles,
    isFetching: state.isFetching
  });

  const mapDispatchToProps = dispatch => ({
    fetchArticles: () => dispatch(fetchArticles(process.env.REACT_APP_API_KEY))
  });

  return connect(mapStateToProps, mapDispatchToProps)(Fetch);
}
