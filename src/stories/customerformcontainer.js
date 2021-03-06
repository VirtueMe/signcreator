import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomerForm from '../customerform';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    customer: state.customer
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
)(CustomerForm);
