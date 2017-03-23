import React, { Component } from 'react';
import { Button, Card, CardActions, CardMedia, CardText, CardTitle } from 'react-toolbox';
import blank from '../images/blank.png';

class Template extends Component {
  render() {
    const { description, subtitle, texts, title } = this.props;
    return (
      <Card>
        <CardTitle
          title={title}
          subtitle={subtitle}
        />
        <CardMedia aspectRatio='wide'>
          <img src={blank} presentation />
        </CardMedia>
        <CardTitle
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardText>{description}</CardText>
        <CardActions>
          <Button label={texts.buttons.select.text} raised primary />
        </CardActions>
      </Card>
    );
  }
}

Template.defaultProps = {
  description: 'Template description',
  subtitle: 'Template subtitle',
  texts: {
    buttons: {
      select: {
        text: 'Velg mal'
      }
    }
  },
  title: 'Template title'
};

export default Template;
