import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';

class TemplateListHeader extends Component {
  render() {
    const { description, subtitle, title } = this.props;

    return (
      <Card>
        <CardTitle
          title={title}
          subtitle={subtitle}
        />
        <CardText>{description}</CardText>
      </Card>
    );
  }
}

TemplateListHeader.defaultProps = {
  description: 'Velg en av malene under for å lage ditt eget unike skilt, du kan etterpå redigere og endre det slik det passer deg best.',
  subtitle: 'Noe for en hver smak...',
  title: 'Lag ditt eget skilt på 1-2-3!'
};

export default TemplateListHeader;
