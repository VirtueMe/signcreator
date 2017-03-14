import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';

import { BACKPLATE } from '../identifiers';

import { RadioButton, RadioGroup } from 'react-toolbox';

const NO_BACKPLATE = '0';
const WHITE_BACKPLATE = '4';
const ALUM_BACKPLATE = '8';

const factory = () => {
  class BackPlate extends Component {
    render() {
      const {actions, backplate, texts} = this.props;

      return (
        <RadioGroup name='comic' value={backplate} onChange={actions.setBackPlate}>
          <RadioButton label={texts[NO_BACKPLATE]} value={NO_BACKPLATE}/>
          <RadioButton label={texts[WHITE_BACKPLATE]} value={WHITE_BACKPLATE} />
          <RadioButton label={texts[ALUM_BACKPLATE]} value={ALUM_BACKPLATE}/>
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
      '4': 'Børstet aluminium',
      '8': 'Hvit plast'
    }
  };

  return BackPlate;
};

const BackPlate = factory();

export default themr(BACKPLATE, null)(BackPlate);

export { factory as backPlateFactory };
export { BackPlate };
