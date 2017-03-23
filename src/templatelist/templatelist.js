import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import TemplateListHeader from './templatelistheader';
import Template from '../template';
import { imageSelector } from '../selectors/image';

import { themr } from 'react-css-themr';
import { TEMPLATELIST } from '../identifiers';


import Blank from '../images/blank.png';
import Square from '../images/square-sample.png';
import Portrait from '../images/portrait-sample.png';

import woman from '../images/farger/mor-mellom4.png';
import man from '../images/farger/far-mellom4.png';
import boy from '../images/farger/gutt-mellom4.png';
import girl from '../images/farger/jente-mellom4.png';

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img4 = document.createElement('img');

img1.src = woman;
img2.src = man;
img3.src = girl;
img4.src = boy;

const information = {
  description: 'Start med blanke ark og lag ditt eget unike skilt.',
  subtitle: 'Bedre plass til lange navn',
  stylesubtitle: 'Et elegant skilt som vekker oppsikt',
  styletitle: 'Monokrom',
  title: 'Liggende skilt'
};

const imageData = [{
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 10, g: 10, b: 10, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 144, g: 19, b: 254, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 13, g: 150, b: 243, a: 1} },
    { type: 1, value: 'Familien Thomas', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 13, g: 150, b: 243, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 }
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    { type: 1, value: '', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    { type: 1, value: 'Familien Jensen', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 76, g: 175, b: 80, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}, {
  items: [
    { type: 1, value: 'Velkommen', height: 10, center: true, italic: false, bold: false, font: 'Arial', color: { r: 255, g: 87, b: 34, a: 1} },
    { type: 1, value: 'Familien Olsen', height: 10, center: true, italic: false, bold: true, font: 'Arial', color: { r: 255, g: 87, b: 34, a: 1} },
    {
      type: 2,
      value: [
        { image: woman, id: 0, img: img1 },
        { image: man, id: 1, img: img2 },
        { image: boy, id: 3, img: img4 },
        { image: girl, id: 2, img: img3 }
      ],
      scale: 1.2
    }
  ],
  settings: { project: 'NTN', type: 0, backplate: '0', top: 0, left: 0, right: 0, bottom: 0 },
  information: information
}];

const blank = {
  description: 'Start med blanke ark og lag ditt eget unike skilt.',
  subtitle: 'Bedre plass til lange navn',
  stylesubtitle: 'For full kontroll',
  styletitle: 'Blankt skilt',
  title: 'Liggende skilt'
};


const factory = () => {
  const TemplateCol = ({image, theme, data}) => (
    <Col xs={12} md={4} xl={3} style={ { padding: '15px' } }>
      <Template image={image} theme={theme} {...data} />
    </Col>
  );

  class TemplateList extends Component {
    state = {
      items: []
    };

    componentDidMount() {
      const { items } = this.props;
      const self = this;

      const result = Promise.all(items.map((item) => (
        imageSelector(item).image()
      ))).then(images => {
        self.setState({ items: images });
      });
    }

    render() {
      const { theme } = this.props;
      const { items } = this.state;

      const list = items.map((item, index) => (
        <TemplateCol key={index} image={item.image} theme={theme} />
      ));

      return (
        <Container fluid>
          <Row>
            <Col xs={12} className={theme.itemheader} >
              <TemplateListHeader />
            </Col>
          </Row>
          <Row>
            <TemplateCol image={Blank} theme={theme} data={blank} />
          </Row>
          <Row>
            {list}
          </Row>
        </Container>
      );
    }
  }

  TemplateList.defaultProps = {
    items: imageData.concat(imageData.map(item => (Object.assign({}, item, { settings: { type: 2 }}))), imageData.map(item => (Object.assign({}, item, { settings: { type: 1 }}))))
  };

  return TemplateList;
}

const TemplateList = factory();

export default themr(TEMPLATELIST, null)(TemplateList);

export { factory as templateListFactory };
export { TemplateList };
