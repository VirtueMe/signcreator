import React, { Component, PropTypes } from 'react';
import { Button, Card, CardActions, CardText, CardTitle, Dialog, ProgressBar } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';
import CustomerForm from '../customerform';
import PaymentOptions from '../payment';


class Payment extends Component {
  componentDidMount() {
    document.getElementById('paymentinformation').scrollIntoView();
  }

  render() {
    const { actions, customer, image, items, payment, sendstatus, settings, texts, toReceipt } = this.props;

    return (
      <Container fluid id="paymentinformation">
        <Row>
          <Col lg={8} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.customer.title}
              </CardTitle>
              <CardText>
                <CustomerForm {...customer} actions={actions} texts={texts.customer} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card>
              <CardTitle>
                {texts.options.title}
              </CardTitle>
              <CardText>
                <PaymentOptions payment={payment} actions={actions} texts={texts.options} />
              </CardText>
              <CardActions>
              <Button
                label={texts.buttons.back.text}
                onClick={ actions.goBack }
                raised  />

                <Button
                  label={texts.buttons.continue.text}
                  onClick={() => toReceipt ? toReceipt() : actions.sendOrder(settings, items, image.large, customer, payment)}
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

Payment.propTypes = {
  sendstatus: PropTypes.shape({
    isSending: PropTypes.bool
  }),
  texts: PropTypes.shape({
    customer: PropTypes.shape({
      title: PropTypes.string
    }),
    options: PropTypes.shape({
      title: PropTypes.string,
      continue: PropTypes.shape({
        text: PropTypes.string
      }),
      back: PropTypes.shape({
        text: PropTypes.string
      })
    })
  })
};

Payment.defaultProps = {
  sendstatus: {
    isSending: false,
  },
  toReceipt: null,
  texts: {
    customer: {
      title: 'Kunde informasjon'
    },
    options: {
      title: 'Betalingsinformasjon',
      buttons: {
        continue: {
          text: 'Bestill'
        },
        back: {
          text: 'Gå tilbake'
        }
      }
    }
  }
};

export default Payment;
