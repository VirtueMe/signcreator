import React, { Component, PropTypes } from 'react';

import { Button, Card, CardActions, CardMedia, CardText, CardTitle } from 'react-toolbox';

class Receipt extends Component {
  render() {
    const { actions, showDesign, texts } = this.props;

    return (
      <Card>
        <CardTitle
          avatar={texts.avatar}
          title={texts.header}
          subtitle={texts.subheader}
        />
        <CardMedia
          aspectRatio="wide"
          image={texts.image}
        />
        <CardTitle
          title={texts.title}
          subtitle={texts.subtitle}
        />
        <CardText>{texts.description}</CardText>
        <CardActions>
          <Button
            label={texts.new.text}
            onClick={showDesign || actions.showStart}
            raised primary />
        </CardActions>
      </Card>
    );
  }
}

Receipt.propTypes = {
  texts: PropTypes.shape({
    avatar: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    new: PropTypes.shape({
      text: PropTypes.string
    })
  })
};

Receipt.defaultProps = {
  showDesign: null,
  texts: {
    avatar: 'https://placeimg.com/80/80/animals',
    header: 'Navnemerket',
    subheader: 'Stedet for navnelapper og skilt',
    image: 'https://placeimg.com/800/450/nature',
    title: 'Kvittering',
    subtitle: 'Takk for din bestilling',
    description: 'Vi setter pris på at du har valgt å bli kunden vår. Skulle det være noe du lurer på med bestillingen, nøl ikke med å ta kontakt med kundeservice.',
    new: {
      text: 'Lag ditt neste skilt'
    }
  }
};

export default Receipt;
