import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { imageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';

import Loader from '../loader';
import * as Actions from '../actions';



function mapStateToProps(state) {
  return {
    image: imageSelector(state),
    items: state.items,
    settings: state.settings,
    borders: borderSelector(state),
    texts: state.texts.design,
    fetch: state.fetch
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
)(Loader);
