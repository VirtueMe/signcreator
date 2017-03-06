import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

import { themr } from 'react-css-themr';

import { CUSTOMERFORM } from '../identifiers';

import { Input } from 'react-toolbox';

const factory = () => {
  class CustomerForm extends Component {
    state = {
      showEmailError: false,
      showNameError: false,
      showAddressError: false,
      showZipError: false,
      showCityError: false
    };

    createError(show, text) {
      if (show) {
        return (
          <span>{text}</span>
        );
      }

      return null;
    }

    render() {
      const { actions, address, addressValid, city, cityValid, name, nameValid, email, emailValid, texts, zip, zipValid } = this.props;

      return (
        <form>
          <Input label={ texts.email.placeholder } error={this.createError(!emailValid && this.state.showEmailError, texts.email.error)} value={email} name="customer_email" onBlur={() => { this.setState({ showEmailError: true})}} onChange={actions.changeEmail} />
          <Input label={ texts.name.placeholder } error={this.createError(!nameValid && this.state.showNameError, texts.name.error)} value={name} name="customer_name" onBlur={() => { this.setState({ showNameError: true})}} onChange={actions.changeName} />
          <Input label={ texts.address.placeholder } error={this.createError(!addressValid && this.state.showAddressError, texts.address.error)} value={address} name="customer_address" onBlur={() => { this.setState({ showAddressError: true})}} onChange={actions.changeAddress} />
          <Input label={ texts.zip.placeholder } error={this.createError(!zipValid && this.state.showZipError, texts.zip.error)} value={zip} name="customer_zip" onBlur={() => { this.setState({ showZipError: true})}} onChange={actions.changeZip} />
          <Input label={ texts.city.placeholder } error={this.createError(!cityValid && this.state.showCityError, texts.city.error)} value={city} name="customer_city" onBlur={() => { this.setState({ showCityError: true})}} onChange={actions.changeCity} />
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
