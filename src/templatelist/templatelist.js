import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import TemplateListHeader from './templatelistheader';
import Template from '../template';
import * as defaults from '../defaults';

import { themr } from 'react-css-themr';
import { TEMPLATELIST } from '../identifiers';

const blank = {
  description: 'Start med blanke ark og lag ditt eget unike skilt.',
  stylesubtitle: 'For full kontroll',
  styletitle: 'Blankt skilt',
};


const factory = () => {
  const TemplateCol = ({actions, data, item, texts, theme}) => (
    <Col xs={12} md={4} xl={3} style={ { padding: '15px' } }>
      <Template actions={actions} item={item} texts={texts} theme={theme} {...data} />
    </Col>
  );

  class TemplateList extends Component {
    state = {
      items: []
    };

    render() {
      const { actions, items, templates, texts, theme } = this.props;
      const { items: templateList } = templates;

      const empties = [0, 1, 2, 3].map(type => {
        const info = items[type];

        const data = {
          subtitle: info && info.description,
          title: info && info.title,
        };

        return (
          <TemplateCol actions={actions} item={defaults.items[type]} data={Object.assign({}, blank, data)} texts={texts.item} theme={theme} />
        );
      });

      const list = templateList.map((item, index) => {
        const info = items[item.settings.type];

        const data = {
          subtitle: info && info.description,
          title: info && info.title,
        };

        return (
          <TemplateCol actions={actions} key={index} data={data} item={item} texts={texts.item} theme={theme} />
        );
      });

      return (
        <Container fluid>
          <Row>
            <Col xs={12} className={theme.itemheader} >
              <TemplateListHeader texts={texts.header} />
            </Col>
          </Row>
          <Row>
            {empties}
          </Row>
          <Row>
            {list}
          </Row>
        </Container>
      );
    }
  }

  TemplateList.defaultProps = {
    items: {

    },
    templates: [],
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
