import React, { Component } from 'react';
import { Button, Card, CardActions, CardMedia, CardText, CardTitle } from 'react-toolbox';
import blank from '../images/blank.png';
import { imageSelector } from '../selectors/image';


class Template extends Component {
  render() {
    const { description, image, stylesubtitle, styletitle, subtitle, texts, theme, title } = this.props;

    return (
      <Card>
        <CardTitle
          title={title}
          subtitle={subtitle}
        />
        <CardMedia aspectRatio='wide'>
          <div className={theme.imgholder}>
            <img src={image} role="presentation" className={theme.img} />
          </div>
        </CardMedia>
        <CardTitle
          title={styletitle}
          subtitle={stylesubtitle}
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
  imageData: null,
  description: 'Template description',
  image: blank,
  stylesubtitle: 'Style sub title',
  styletitle: 'Style name',
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
