import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import TemplateListHeader from './templatelistheader';
import Template from '../template';
import { smallImageSelector } from '../selectors/image';

import { themr } from 'react-css-themr';
import { TEMPLATELIST } from '../identifiers';

import Blank from '../images/blank.png';


const blank = {
  description: 'Start med blanke ark og lag ditt eget unike skilt.',
  subtitle: 'Bedre plass til lange navn',
  stylesubtitle: 'For full kontroll',
  styletitle: 'Blankt skilt',
  title: 'Liggende skilt'
};


const factory = () => {
  const TemplateCol = ({data, image, texts, theme}) => (
    <Col xs={12} md={4} xl={3} style={ { padding: '15px' } }>
      <Template image={image} texts={texts} theme={theme} {...data} />
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
        smallImageSelector(item).image()
      ))).then(images => {
        self.setState({ items: images });
      });
    }

    render() {
      const { texts, theme } = this.props;
      const { items } = this.state;

      const list = items.map((item, index) => (
        <TemplateCol key={index} image={item.image} texts={texts.item} theme={theme} />
      ));

      return (
        <Container fluid>
          <Row>
            <Col xs={12} className={theme.itemheader} >
              <TemplateListHeader texts={texts.header} />
            </Col>
          </Row>
          <Row>
            <TemplateCol data={blank} image={Blank} texts={texts.item} theme={theme} />
          </Row>
          <Row>
            {list}
          </Row>
        </Container>
      );
    }
  }

  TemplateList.defaultProps = {
    items: [],
    texts: {
      item: {
        buttons: {
          select: {
            text: 'Velg mal'
          }
        }
      },
      header: {

      }
    }
  };

  return TemplateList;
}

const TemplateList = factory();

export default themr(TEMPLATELIST, null)(TemplateList);

export { factory as templateListFactory };
export { TemplateList };
