import React from 'react';

import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { imageSelector, smallImageSelector } from '../selectors/image';
import Payment from '../form/payment';
import { priceSelector } from '../selectors/price';

function imageCreators(state) {
  const small = smallImageSelector(state);
  const large = imageSelector(state);

  return { small, large };
}

function mapStateToProps(state) {
  return {
    amountoptions: state.texts.amount,
    customer: state.customer,
    image: imageCreators(state),
    payment: state.payment,
    price: priceSelector(state),
    texts: state.texts.payment
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
)(Payment);
