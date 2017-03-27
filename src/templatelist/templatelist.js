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
  const TemplateCol = ({actions, data, image, item, texts, theme}) => (
    <Col xs={12} md={4} xl={3} style={ { padding: '15px' } }>
      <Template actions={actions} item={item} image={image} texts={texts} theme={theme} {...data} />
    </Col>
  );

  class TemplateList extends Component {
    state = {
      items: []
    };

    render() {
      const { actions, templates, texts, theme } = this.props;
      const { items } = templates;

      const list = items.map((item, index) => (
        <TemplateCol actions={actions} key={index} item={item} texts={texts.item} theme={theme} />
      ));

      return (
        <Container fluid>
          <Row>
            <Col xs={12} className={theme.itemheader} >
              <TemplateListHeader texts={texts.header} />
            </Col>
          </Row>
          <Row>
            <TemplateCol actions={actions} data={blank} image={Blank} texts={texts.item} theme={theme} />
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
