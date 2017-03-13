import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { classNameSelector, imageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';
import Form from '../form/index';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    borders: borderSelector(state),
    image: imageSelector(state),
    imageClassName: classNameSelector(state),
    items: state.items,
    settings: state.settings,
    index: state.view.index,
    sendstatus: state.sendstatus,
    customer: state.customer,
    payment: state.payment,
    texts: state.texts
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
