import React, { Component } from 'react';
import Start from '../start';

class Loader extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchTexts('NTN');
  }

  render() {
    const { children, fetch } = this.props;

    return (
      <Start { ...fetch }>
        { children }
      </Start>
    );
  }
}

Loader.defaultProps = {
  fetch: {
    isFetching: true
  }
};

export default Loader;
