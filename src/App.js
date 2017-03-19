import React, { Component } from 'react';
import Form from './containers/form';
import Loader from './loader';

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
