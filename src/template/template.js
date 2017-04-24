import React, { Component } from 'react';
import { Button, Card, CardActions, CardMedia, CardText, CardTitle } from 'react-toolbox';
import { smallImageSelector } from '../selectors/image';


class Template extends Component {
  state = {
    image: null,
    className: 'img'
  };

  componentDidMount() {
    const { image, item } = this.props;

    this.stopState = false;

    if (image || item.image ) {
      this.setState({ image: image || item.image.image });
    }
    else {
      const result = smallImageSelector(item);

      result
        .get()
        .then((smallImage) => {
          if (!this.stopState) {
            this.setState(() => ({ ...smallImage, className: result.className }));
          }
        });
    }
  }

  componentWillUnmount() {
    this.stopState = true;
  }

  render() {
    const { actions, description, item, stylesubtitle, styletitle, subtitle, texts, theme, title } = this.props;
    const { image, className } = this.state;

    console.info('a: ', actions);

    return (
      <Card>
        <CardTitle
          title={title}
          subtitle={subtitle}
        />
        <CardMedia aspectRatio='wide'>
          <div className={theme.imgholder}>
            <img src={image} role="presentation" className={theme[(item && item.className) || className]} />
          </div>
        </CardMedia>
        <CardTitle
          title={styletitle}
          subtitle={stylesubtitle}
        />
        <CardText>{description}</CardText>
        <CardActions>
          <Button label={texts.buttons.select.text} onClick={() => actions.push({ pathname: '/edit', state: item })} raised primary />
        </CardActions>
      </Card>
    );
  }
}

Template.defaultProps = {
  actions: {

  },
  imageData: null,
  description: 'Template description',
  image: null,
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
