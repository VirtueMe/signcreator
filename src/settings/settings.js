import React, { Component } from 'react';
import SignDropdown from '../signselector/signdropdown';
import Frames from './frames';

class Settings extends Component {
  render() {
    const { settings, actions } = this.props;
    const { type } = settings;

    return (
      <div>
        <SignDropdown value={type} actions={actions} />
        <Frames {...settings} actions={actions} />
      </div>
    );
  }
}

Settings.defaultProps = {

};

export default Settings;
