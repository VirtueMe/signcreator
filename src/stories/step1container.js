import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { imageSelector, smallImageSelector } from '../selectors/image';
import { priceSelector } from '../selectors/price';
import borderSelector from '../selectors/borders';

import Design from '../form/design';
import * as Actions from '../actions';

function imageCreators(state) {
  const small = smallImageSelector(state);
  const large = imageSelector(state);

  return { small, large };
}


function mapStateToProps(state) {
  return {
    amountoptions: state.texts.amount,
    borders: borderSelector(state),
    image: imageCreators(state),
    items: state.items,
    price: priceSelector(state),
    settings: state.settings,
    texts: state.texts.design
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design);
