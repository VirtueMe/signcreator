import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import BackPlate from '../backplate';

class BackplateCard extends Component {
  render() {
    const { texts } = this.props;

    return (
      <Card>
        <CardTitle>
          {texts.title}
        </CardTitle>
        <CardText>
          <BackPlate {...this.props} />
        </CardText>
      </Card>
    );
  }
}

BackplateCard.defaultProps = {
  backplate: '0',
  texts: {
    title: 'Backplate',
    '0': 'Ingen',
    '1': 'Børstet aluminium',
    '2': 'Hvit plast'
  }
};

export default BackplateCard;
