import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {};

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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Class.propTypes = propTypes;

Class.defaultProps = defaultProps;

export default Radium(Class);
