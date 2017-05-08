import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Preview from './index';
import * as Actions from '../actions';
import imagegenerator from '../canvas/portrait.js'


function mapStateToProps(state) {
  const {image} = imagegenerator(state.items).getImage();

  return {
    image: image,
    className: 'portrait'
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
)(Preview);
