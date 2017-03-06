import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Step2 from '../form/step2';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    customer: state.customer,
    payment: state.payment
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
)(Step2);
