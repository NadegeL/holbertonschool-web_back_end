import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newPrice) {
    if (typeof newPrice !== 'number') {
      throw new TypeError('Price must be a number');
    }
    this._amount = newPrice;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount}  ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
