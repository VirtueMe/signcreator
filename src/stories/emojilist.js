import React, { Component } from 'react';

export default class EmojiList extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
