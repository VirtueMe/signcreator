import { createSelector } from 'reselect';

const typeSelector = state => state.settings.type;
const backplateSelector = state => state.settings.backplate;

const paymentSelector = state => state.payment.type;

const pricesSelector = state => state.prices;

const currencySelector = state => state.currency;

const priceSelector = createSelector(
  [typeSelector, backplateSelector, paymentSelector, pricesSelector, currencySelector],
  (type, backplate, payment, prices, currency) => {
    const sign = prices.signs[type];
    const abackplate = Object.assign({}, prices.backplates[backplate], { type: backplate });
    const fee = payment === 0 ? prices.fee : { amount: 0, text: 'no fee' };
    const shipping = prices.shipping;
    const total = sign.amount + abackplate.amount;
    const totalamount = total + fee.amount + shipping.amount;

    return {
      sign,
      backplate: abackplate,
      fee,
      shipping,
      total,
      totalamount,
      currency
    };
  }
);

export { priceSelector };
