import React, { Component } from 'react';
import {Cond, eq} from 'react-cond';

import Transition from './motion.js';
import Input from './step1';
import Payment from './step2';
import Receipt from './step3';

class Form extends Component {
  render() {
    const { actions, customer, image, imageClassName, index, items, payment, settings } = this.props;

    console.info(this.props);
    return (
      <Transition>
        { index === 0 ? <Input key='input' actions={actions} image={image} imageClassName={imageClassName} items={items} settings={settings}  /> : <Payment key='payment' actions={actions} customer={customer} payment={payment} /> }
      </Transition>
    );
  }
}

export default Form;
