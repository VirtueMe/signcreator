import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import SignDropdown from '../signselector/signdropdown';

class SignSelectorCard extends Component {
  render() {
    const { texts, value } = this.props;
    let desc = null;

    if (value) {
      const selected = texts.items[value];
      if (selected && selected.longdesc){
        desc = (
          <span>{selected.longdesc}</span>
        );
      }
    }

    return (
      <Card style={ { overflow: 'visible' } }>
        <CardTitle>
          {texts.title}
        </CardTitle>
        <CardText>
          <SignDropdown {...this.props} />
          {desc}
        </CardText>
      </Card>
    );
  }
}

SignSelectorCard.defaultProps = {
  texts: {
    title: 'Type skilt',
    items: {
      '0': {
        title: '',
        description: '',
        longdesc: ''
      }
    }
  }
};

export default SignSelectorCard;
