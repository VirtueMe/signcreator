import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';

import { BACKPLATE } from '../identifiers';

import { RadioButton, RadioGroup } from 'react-toolbox';

const factory = () => {
  class BackPlate extends Component {
    render() {
      const {actions, backplate, texts} = this.props;

      return (
        <RadioGroup name='comic' value={backplate} onChange={actions.setBackPlate}>
          <RadioButton label={texts['0']} value='0'/>
          <RadioButton label={texts['1']} value='1' />
          <RadioButton label={texts['2']} value='2'/>
        </RadioGroup>
      );
    }
  }

  BackPlate.propTypes = {

  };

  BackPlate.defaultProps = {
    backplate: 0,
    texts: {
      '0': 'Nei',
      '1': 'Børstet aluminium',
      '2': 'Hvit plast'
    }
  };

  return BackPlate;
};

const BackPlate = factory();

export default themr(BACKPLATE, null)(BackPlate);

export { factory as backPlateFactory };
export { BackPlate };
