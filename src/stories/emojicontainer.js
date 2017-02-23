import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiList from '../emojiitem/emojilist';
import * as EmojiActions from '../actions';

function mapStateToProps(state) {
  return {
    value: state.items[0].value,
    index: 0
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
)(EmojiList);
