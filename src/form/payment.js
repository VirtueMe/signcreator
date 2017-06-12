import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
import { Button, Card, CardActions, CardText, CardTitle, Dialog, ProgressBar, Snackbar } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';
import CustomerForm from '../customerform';
import Preview from '../preview';
import PaymentOptions from '../payment';
import AmountInfo from '../amountinfo';


class Payment extends Component {
  componentDidMount() {
    document.getElementById('paymentinformation').scrollIntoView();
  }

  render() {
    const { actions, amountoptions, customer, image, items, payment, price, sendstatus, settings, texts, toReceipt } = this.props;

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
              <CardText>
                <Preview image={image.small} />
              </CardText>
            </Card>
            <br />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <br />
            <Card style={ { overflow: 'visible' } }>
              <CardTitle>
                {texts.options.title}
              </CardTitle>
              <CardText>
                <PaymentOptions payment={payment} actions={actions} texts={texts.options} />
              </CardText>
              <AmountInfo backplate={price.backplate} fee={price.fee} item={price.sign} texts={{ total: texts.price.total, options: amountoptions }} shipping={price.shipping} title={texts.price.title} total={price.totalamount} />
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
        <Snackbar
          action={ (texts.buttons.action && texts.buttons.action.text) || 'Lukk' }
          active={(sendstatus.message || '') !== ''}
          label='Sending feilet, dessverre har vi en feil på iphone for tiden'
          onClick={() => actions.closeSendMessage()}
          type='warning'
        />
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
      title: PropTypes.string
    }),
    buttons: PropTypes.shape({
      action:PropTypes.shape({
        text: PropTypes.string
      }),
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
        action: {
          text: 'Lukk'
        },
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
