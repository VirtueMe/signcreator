import React, { Component } from 'react';

import Transition from './motion.js';
import Input from './step1';
import Payment from './step2';
import Receipt from './step3';

class Form extends Component {
  render() {
    const { actions, borders, customer, image, imageClassName, index, items, payment, sendstatus, settings, texts } = this.props;

    const view = [
      <Input key='input' actions={actions} borders={borders} image={image} imageClassName={imageClassName} items={items} settings={settings}  />,
      <Payment key='payment' actions={actions} customer={customer} image={image} items={items} payment={payment} settings={settings} sendstatus={sendstatus} />,
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
