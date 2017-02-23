import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditList from '../editlist';
import * as EmojiActions from '../actions';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmojiActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditList);
