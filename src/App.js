import React, { Component } from 'react';
import Loader from './containers/loader';
import Form from './containers/form';

import './App.css';

class App extends Component {
  render() {
    const { currency, history, message, project } = this.props;

    return (
      <Loader project={project} message={message}>
        <Form history={history} currency={currency} />
      </Loader>
    );
  }
}

export default App;
