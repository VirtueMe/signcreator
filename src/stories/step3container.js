import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Receipt from '../form/receipt';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    customer: state.customer,
    payment: state.payment,
    texts: state.texts.receipt
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
)(Receipt);
