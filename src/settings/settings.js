import React, { Component } from 'react';
import SignDropdown from '../signselector/signdropdown';
import DropDownline from '../frames/linedropdown';

class Settings extends Component {
  render() {
    return (
      <div>
        <SignDropdown />
        <DropDownline />
        <DropDownline />
        <DropDownline />
        <DropDownline />
      </div>
    );
  }
}

Settings.defaultProps = {

};

export default Settings;
