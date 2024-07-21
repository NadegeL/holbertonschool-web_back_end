import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, battery) {
    super(brand, motor, color);
    this._battery = battery;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color, this._battery);
  }
}
