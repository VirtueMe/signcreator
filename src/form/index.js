import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';

import Settings from '../settings';
import EditList from '../editlist';
import LandscapePreview from '../preview/landscapepreview';
import PortraitPreview from '../preview/portraitpreview';
import SquarePreview from '../preview/squarepreview';
import HeartPreview from '../preview/heartpreview';

const PreviewList = [LandscapePreview, PortraitPreview, SquarePreview, HeartPreview];


class Step1 extends Component {
  render() {
    const { actions, items, settings, texts } = this.props;

    const Preview = PreviewList[settings.type];

    return (
      <Container fluid>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardText>
                <Settings settings={settings} texts={texts} actions={actions} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                Tekst på skiltet
              </CardTitle>
              <CardText>
                <EditList items={items} texts={texts} actions={actions} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                Forhåndsvisning
              </CardTitle>
              <CardText>
                <Preview items={items} />
              </CardText>
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
};

export default Step1;
