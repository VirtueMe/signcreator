import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Payment from '../form/payment';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    customer: state.customer,
    payment: state.payment,
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
