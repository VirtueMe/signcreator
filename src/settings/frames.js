import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import DropDownline from '../frames/linedropdown';


class Frames extends Component {
  render() {
    const { type, top, left, right, bottom, actions, texts } = this.props;

    const [topItem, bottomItem] = type !== 4 ? [<DropDownline key='top' value={top} action={actions.setTop} texts={ { label: texts.labelTop, noLineText: texts.noLineText } } />, <DropDownline key='bottom' value={bottom} action={actions.setBottom} texts={ { label: texts.labelBottom, noLineText: texts.noLineText } } />] : [null, null];

    return (
      <Card style={ { overflow: 'visible' } }>
        <CardTitle>
          {texts.title}
        </CardTitle>
        <CardText>
          {topItem}
          <DropDownline key='left' value={left} action={actions.setLeft} texts={ { label: texts.labelLeft, noLineText: texts.noLineText } } />
          <DropDownline key='right' value={right} action={actions.setRight} texts={ { label: texts.labelRight, noLineText: texts.noLineText } } />
          {bottomItem}
        </CardText>
      </Card>
    );
  }
}

Frames.defaultProps = {
  texts: {
    title: 'Dekor',
    noLineText: 'Ingen linje',
    labelTop: 'Velg øverste linje',
    labelLeft: 'Velg venstre linje',
    labelRight: 'Velg høyre linje',
    labelBottom: 'Velg bunn linje'
  }
};

export default Frames;
