import React, { Component } from 'react';
import Selector from './type';
import Backplate from './backplate';
import Frames from './frames';

class Settings extends Component {
  render() {
    const { settings, actions } = this.props;
    const { type, backplate } = settings;

    return (
      <div>
        <Selector value={type} actions={actions} />
        <br />
        <Backplate backplate={backplate}  actions={actions} />
        <br />
        <Frames {...settings} actions={actions} />
      </div>
    );
  }
}

Settings.defaultProps = {

};

export default Settings;
