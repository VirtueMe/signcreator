import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiList from '../stories/emojilist';
import * as EmojiActions from '../actions';

class App extends Component {
  render() {
    const { emojis, actions } = this.props;

    return (
      <EmojiList items={emojis} actions={actions} />
    );
  }
}

App.propTypes = {
  emojis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    emojis: state.emojis
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
)(App);
