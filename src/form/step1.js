import React, { Component, PropTypes } from 'react';
import { Button, Card, CardActions, CardText, CardTitle } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';

import EditList from '../editlist';
import Preview from '../preview';
import Settings from '../settings';


class Step1 extends Component {
  render() {
    const { actions, borders, image, imageClassName, items, settings, texts, toPayment } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card style={ { overflow: 'visible' } }>
              <CardTitle>
                {texts.settings.title}
              </CardTitle>
              <CardText>
                <Settings actions={actions} borders={borders} settings={settings} texts={texts} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card style={ { overflow: 'visible' } }>
              <CardTitle>
                {texts.editlist.title}
              </CardTitle>
              <CardText>
                <EditList items={items} decoration={borders.decoration} texts={texts.editlist} actions={actions} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.preview.title}
              </CardTitle>
              <CardText>
                <Preview image={image} className={imageClassName} />
              </CardText>
              <CardActions>
                <Button label={texts.preview.continue.text} onClick={toPayment || actions.showPayment} raised primary />
              </CardActions>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

Step1.propTypes = {

};

Step1.defaultProps = {
  toPayment: null,
  texts: {
    editlist: {
      title: 'Tekst på skilt',
      menu: {
        action: {
          delete: 'Slett',
          down: 'Flytt ned',
          up: 'Flytt opp'
        }
      },
      textitem: {
        menu: {
          format: {
            increase: "Øk skrift",
            decrease: 'Mink skrift',
            font: 'Font',
            bold: 'Fet',
            italic: 'Italic',
            center: 'Sentrer',
            color: 'Farge'
          }
        },
        placeholder: 'Text linje'
      },
      dialogs: {
        remove: {
          title: 'Bekreft sletting',
          description: 'Slette linjen?',
          buttons: {
            cancel: 'Avbryt',
            delete: 'Slett'
          }
        },

        font: {
          title: 'Velg font',
          placeholder: 'Velg font'
        }
      }
    },
    preview: {
      title: 'Forhåndsvisning',
      continue: {
        text: 'Gå videre'
      },
    },
    settings: {
      title: 'Lag ditt dørskilt på 1-2-3!'
    }
  }
};

export default Step1;
