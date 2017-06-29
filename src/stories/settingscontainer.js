import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../settings';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    settings: state.settings
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
)(Settings);
