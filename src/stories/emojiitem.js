import React, { Component } from 'react';
import { FontIcon } from 'react-toolbox';

const imgStyles = {
  height: 50
};

export const small = {
  zoom: '50%'
};

export const child = {
  zoom: '70%'
};


export default class EmojiItem extends Component {
  render() {
    let styles = Object.assign({}, imgStyles, this.props.size);

    return (
      <span><img src={this.props.image} style={styles}/></span>
    );
  }
}
