import React, { Component, PropTypes } from 'react';
import { Button, Card, CardActions, CardText, CardTitle } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';
import CustomerForm from '../customerform';
import PaymentOptions from '../payment';


class Step2 extends Component {
  render() {
    const { actions, customer, payment, settings, texts, toReceipt } = this.props;

    console.info(customer);

    return (
      <Container fluid>
        <Row>
          <Col lg={8} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.customer.title}
              </CardTitle>
              <CardText>
                <CustomerForm {...customer} actions={actions} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.paymentoptions.title}
              </CardTitle>
              <CardText>
                <PaymentOptions payment={payment} actions={actions} />
              </CardText>
              <CardActions>
                <Button
                  label={texts.paymentoptions.continue.text}
                  onClick={toReceipt || actions.toReceipt}
                  disabled={!(customer.valid && payment.valid)}
                  raised primary />
              </CardActions>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

Step2.propTypes = {

};

Step2.defaultProps = {
  toPayment: null,
  texts: {
    customer: {
      title: 'Kunde informasjon'
    },
    paymentoptions: {
      title: 'Betaltingsinformasjon',
      continue: {
        text: 'Bestill'
      },
    }
  }
};

export default Step2;
