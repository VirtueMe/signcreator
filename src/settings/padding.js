import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import Padding from '../padding';

class PaddingCard extends Component {
  render() {
    const { texts } = this.props;

    return (
      <Card>
        <CardTitle>
          {texts.title}
        </CardTitle>
        <CardText>
          <Padding {...this.props} />
        </CardText>
      </Card>
    );
  }
}

PaddingCard.defaultProps = {
  padding: 10,
  texts: {
    title: 'Linjeavstand',
    placeholder: 'Linjeavstand',
    hint: 'Avstand mellom linjene'
  }
};

export default PaddingCard;
