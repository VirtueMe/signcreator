import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
import classnames from 'classnames';
import EmojiItem from './emojiitem';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class EmojiList extends Component {
  state = {
    selected: null
  };

  findEmoji(id) {
    const { value } = this.props;
    const emoji = value.filter(e => e.id === id)[0];

    return {
      emoji,
      index: value.indexOf(emoji)
    };
  }

  selectHandler = (e, i) => {
    this.setState((prevState, props) => ( { selected: prevState.selected === i ? null : i } ));
  };

  render() {
    const { actions, className, index, theme, value } = this.props;

    console.info('info: ', this.state.selected);

    const items = value.map(item => (
        <EmojiItem key={item.id} id={item.id} theme={theme} selected={this.state.selected=== item.id} clickHandler={(e) => this.selectHandler(e, item.id)} index={index} image={item.image} size={item.size} actions={actions} findEmoji={(id) => this.findEmoji(id)} />
    ));

    return (
      <div className={className}>
        {items}
      </div>
    );
  }
}

EmojiList.propTypes = {
  value: PropTypes.array,
  index: PropTypes.number
};

EmojiList.defaultProps = {
  value: [],
  index: 0,
  text: ''
};


export default DragDropContext(HTML5Backend)(EmojiList);
