import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { FontIcon } from 'react-toolbox';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const ItemTypes = {
  Emoji: 'emoji'
};

const emojiTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId, index } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
     const { index: overIndex } = props.findEmoji(overId);

     props.actions.moveEmoji(draggedId, overIndex, index);
    }
  }
};


const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      originalIndex: props.findEmoji(props.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex, index } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (didDrop) {
      props.actions.moveEmoji(droppedId, originalIndex, index);
    }
  }
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

function collectSource(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class EmojiItem extends Component {
  render() {
    const { isDragging, connectDragSource, connectDropTarget, className } = this.props;

    return connectDragSource(connectDropTarget(
      <span><img src={this.props.image} className={className}/></span>
    ));
  }
}

EmojiItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default flow(
  DropTarget(ItemTypes.Emoji, emojiTarget, collect),
  DragSource(ItemTypes.Emoji, emojiSource, collectSource)
)(EmojiItem);
