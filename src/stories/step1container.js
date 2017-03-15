import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { classNameSelector, imageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';

import Design from '../form/design';
import * as Actions from '../actions';



function mapStateToProps(state) {
  return {
    image: imageSelector(state),
    imageClassName: classNameSelector(state),
    items: state.items,
    settings: state.settings,
    borders: borderSelector(state),
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
