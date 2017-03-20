import React, { Component } from 'react';
import Loader from './containers/loader';
import Form from './containers/form';

class App extends Component {
  render() {
    const { message, project} = this.props;

    return (
      <Loader project={project} message={message}>
        <Form />
      </Loader>
    );
  }
}

export default App;
