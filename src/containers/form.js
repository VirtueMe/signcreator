import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { classNameSelector, imageSelector } from '../selectors/image';

import Form from '../form/index';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    image: imageSelector(state),
    imageClassName: classNameSelector(state),
    items: state.items,
    settings: state.settings,
    index: state.view.index,
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
)(Form);
