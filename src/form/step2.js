import React, { Component, PropTypes } from 'react';
import { Button, Card, CardActions, CardText, CardTitle, Dialog, ProgressBar } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';
import CustomerForm from '../customerform';
import PaymentOptions from '../payment';


class Step2 extends Component {
  render() {
    const { actions, customer, image, items, payment, sendstatus, settings, texts, toReceipt } = this.props;

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
                label={texts.paymentoptions.back.text}
                onClick={ actions.showInput}
                raised  />

                <Button
                  label={texts.paymentoptions.continue.text}
                  onClick={() => actions.sendOrder(settings, items, image, customer, payment)}
                  disabled={sendstatus.isSending || !(customer.valid && payment.valid)}
                  raised primary />
              </CardActions>
            </Card>
            <br />
          </Col>
        </Row>
        <Dialog
          active={sendstatus.isSending}
          title='Sender bestilling'
        >
          <Row>
            <Col xs={4} offset={ { xs: 4 }}>
              <ProgressBar type='circular' mode='indeterminate' multicolor />
            </Col>
          </Row>
        </Dialog>

      </Container>
    );
  }
}

Step2.propTypes = {

};

Step2.defaultProps = {
  sendstatus: {
    isSending: false,
  },
  toReceipt: null,
  texts: {
    customer: {
      title: 'Kunde informasjon'
    },
    paymentoptions: {
      title: 'Betaltingsinformasjon',
      continue: {
        text: 'Bestill'
      },
      back: {
        text: 'Gå tilbake'
      }
    }
  }
};

export default Step2;
