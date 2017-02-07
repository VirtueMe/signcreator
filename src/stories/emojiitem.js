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
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
     const { index: overIndex } = props.findEmoji(overId);

     props.actions.moveEmoji(draggedId, overIndex);
    }
  }
};


const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findEmoji(props.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.actions.moveEmoji(droppedId, originalIndex);
    }
  }
};

const imgStyles = {
  height: 50
};

export const small = {
  zoom: '50%'
};

export const child = {
  zoom: '70%'
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
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
    const styles = Object.assign({}, imgStyles, this.props.size);
    const { isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <span><img src={this.props.image} style={styles}/></span>
    ));
  }
}

EmojiItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  size: PropTypes.any.isOptional,
  index: PropTypes.any.isRequired
};

export default flow(
  DropTarget(ItemTypes.Emoji, emojiTarget, collect),
  DragSource(ItemTypes.Emoji, emojiSource, collectSource)
)(EmojiItem);
