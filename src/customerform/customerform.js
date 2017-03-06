import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';

import { CUSTOMERFORM } from '../identifiers';

import { Input } from 'react-toolbox';

const factory = () => {
  class CustomerForm extends Component {
    render() {
      const { actions, texts } = this.props;

      return (
        <form>
          <Input label={ texts.email.placeholder } name="customer_email" onChange={actions.changeEmail} />
          <Input label={ texts.name.placeholder } name="customer_name" onChange={actions.changeName} />
          <Input label={ texts.address.placeholder } name="customer_address" onChange={actions.changeAddress} />
          <Input label={ texts.zip.placeholder } name="customer_zip" onChange={actions.changeZip} />
          <Input label={ texts.city.placeholder } name="customer_city" onChange={actions.changeCity} />
        </form>
      );
    }
  }

  CustomerForm.propTypes = {
    theme: PropTypes.shape({

    })
  };

  CustomerForm.defaultProps = {
    actions: {

    },
    texts: {
      email: {
        placeholder: 'E-post',
        error: 'E-post påkrevd'
      },

      name: {
        placeholder: 'Fullt navn',
        error: 'Navn påkrevd'
      },

      address: {
        placeholder: 'Adresse',
        error: 'Adresse påkrevd'
      },

      zip: {
        placeholder: 'Postnummer',
        error: 'Adresse påkrevde'
      },

      city: {
        placeholder: 'Poststed',
        error: 'Poststed påkrevd'
      }
    }
  };

  return CustomerForm;
};

const CustomerForm = factory();

export default themr(CUSTOMERFORM, null)(CustomerForm);

export { factory as customerFormFactory };
export { CustomerForm };
