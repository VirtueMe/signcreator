import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import SignDropdown from '../signselector/signdropdown';

class SignSelectorCard extends Component {
  render() {
    const { texts } = this.props;

    return (
      <Card style={ { overflow: 'visible' } }>
        <CardTitle>
          {texts.title}
        </CardTitle>
        <CardText>
          <SignDropdown {...this.props} />
        </CardText>
      </Card>
    );
  }
}

SignSelectorCard.defaultProps = {
  texts: {
    title: 'Type skilt',
  }
};

export default SignSelectorCard;
