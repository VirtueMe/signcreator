import { createSelector } from 'reselect';

const typeSelector = state => state.settings.type;
const backplateSelector = state => state.settings.backplate;

const paymentSelector = state => state.payment.type;

const pricesSelector = state => state.prices;

const priceSelector = createSelector(
  [typeSelector, backplateSelector, paymentSelector, pricesSelector],
  (type, backplate, payment, prices) => {
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
      totalamount
    };
  }
);

export { priceSelector };
