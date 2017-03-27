import React, { Component } from 'react';

import Transition from './motion.js';
import Design from './design';
import Payment from './payment';
import Receipt from './receipt';
import TemplateList from './templates';

class Form extends Component {
  render() {
    const { actions, borders, customer, image, imageClassName, index, items, payment, sendstatus, settings, templates, texts } = this.props;

    const view = [
      <TemplateList key='templates' actions={actions} texts={texts.templates} templates={templates} />,
      <Design key='design' actions={actions} borders={borders} image={image} imageClassName={imageClassName} items={items} settings={settings} texts={texts.design}  />,
      <Payment key='payment' actions={actions} customer={customer} image={image} items={items} payment={payment} settings={settings} sendstatus={sendstatus} texts={texts.payment} />,
      <Receipt key='receipt' actions={actions} customer={customer} payment={payment}  texts={texts.receipt} />
    ];

    return (
      <Transition>
        { view[index]  }
      </Transition>
    );
  }
}

export default Form;
