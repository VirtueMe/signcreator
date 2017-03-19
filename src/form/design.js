import React, { Component, PropTypes } from 'react';
import { Button, Card, CardActions, CardText, CardTitle } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';

import EditList from '../editlist';
import Preview from '../preview';
import Settings from '../settings';


class Design extends Component {
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
                <Settings actions={actions} borders={borders} settings={settings} texts={texts.settings} />
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

Design.propTypes = {
  text: PropTypes.shape({
  })
};

Design.defaultProps = {
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
          placeholder: 'Velg font',
          buttons: {
            close: 'Lukk'
          }
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
      title: 'Lag ditt dørskilt på 1-2-3!',
      frames: {
        title: ''
      },
      plate: {
        title: ''
      },
      selector: {
        label: 'Velg hvilket skilt du ønsker',
        items: {
          '0': {
            title: 'Liggende skilt',
            description: 'Bedre plass til lange navn'
          },
          '1': {
            title: 'Stående skilt',
            description: 'Plass til flere linjer tekst'
          },
          '2': {
            title: 'Kvadratisk skilt',
            description: 'Enkelt og stilrent skilt'
          },
          '3': {
            title: 'Hjerteformet skilt',
            description: 'Til en kjærlig familie'
          }
        }
      }
    }
  }
};

export default Design;
