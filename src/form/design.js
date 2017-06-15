import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
import { Button, Card, CardActions, CardText, CardTitle } from 'react-toolbox';
import { Col, Container, Row, Visible } from 'react-grid-system';

import StickyPreview from '../stickypreview';
import Preview from '../preview';
import EditList from '../editlist';
import AmountInfo from '../amountinfo';



import { BackplateCard, Frames, Padding, SignSelectorCard } from '../settings';


class Design extends Component {
  componentDidMount() {
    document.getElementById('signedit').scrollIntoView();
  }

  render() {
    const { actions, amountoptions, borders, image, items, price, settings, texts } = this.props;

    const PreviewImage = () => (
      <Preview image={image.small} />
    );

    return (
      <Container fluid id="signedit">
        <Row>
          <Col xs={12}>
            <Card style={ { overflow: 'visible' } }>
              <CardTitle>
                {texts.settings.title}
              </CardTitle>
              <CardActions>
                <Button icon='arrow_back' label={texts.buttons.back.text} onClick={actions.goBack} raised  />
              </CardActions>
            </Card>
          </Col>
        </Row>
        <StickyPreview Preview={PreviewImage}>
          <Visible xs>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardText>
                    <PreviewImage />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Visible>
        </StickyPreview>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <br />
            <SignSelectorCard actions={actions} value={settings.type} texts={texts.settings.selector} />
            <br />
            <Card style={ { overflow: 'visible' } }>
              <CardTitle>
                {texts.editlist.title}
              </CardTitle>
              <CardText>
                <EditList items={items} decoration={borders.decoration} texts={texts.editlist} actions={actions} />
              </CardText>
            </Card>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Padding actions={actions} padding={settings.padding} texts={texts.settings.padding} />
            <br />
            <Frames actions={actions} borders={borders} {...settings} texts={texts.settings.frames} />
            <br />
            <BackplateCard backplate={settings.backplate} actions={actions} texts={texts.settings.plate} />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.preview.title}
              </CardTitle>
              <CardText>
                <PreviewImage />
              </CardText>
              <AmountInfo backplate={price.backplate} item={price.sign} texts={ { total: texts.settings.price.total, options: amountoptions } } title={texts.settings.price.title} total={price.total} />
              <CardActions>
                <Button label={texts.preview.continue.text} onClick={() => actions.push('/payment')} raised primary />
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
      },
      price: {
        title: 'Priser'
      }
    }
  }
};

export default Design;
