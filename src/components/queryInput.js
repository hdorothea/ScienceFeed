import React, { Component } from 'react';

import Icon from './icon';
import { search } from '../iconPaths';

import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  input: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.9em',
    paddingTop: '1.3em',
    paddingBottom: '1.3em',
    paddingLeft: '0.5em',
    borderRadius: '3px',
    height: '2rem',
    borderRight: 0,
    border: '1px solid gainsboro',
    flexGrow: 1
  },
  submitButton: {
    backgroundColor: 'white',
    paddingLeft: '1em',
    paddingRight: '1em',
    border: '1px solid #ccc',
    boxShadow: 'rgb(238, 238, 238) 0px 1px 2px 0px inset'
  },
  queryInput: {
    display: 'flex',
    marginBottom: '1rem'
  }
};

const propTypes = {
  onSubmit: PropTypes.func
};

const defaultProps = {
  onSubmit: () => null
};

class Class extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(previousState => ({ ...previousState, value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form style={styles.queryInput} onSubmit={this.handleSubmit}>
        <input
          placeholder="Search..."
          style={styles.input}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button style={styles.submitButton} type="submit">
          {' '}
          <Icon paths={search} size={10} />
        </button>
      </form>
    );
  }
}

Class.propTypes = propTypes;

Class.defaultProps = defaultProps;

export default Radium(Class);
