import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, battery, range) {
    super(brand, motor, color);
    this._battery = battery;
    this._range = range;
  }

  get battery() {
    return this._battery;
  }

  get range() {
    return this._range;
  }
  
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color, this._battery, this._range);
  }
}
