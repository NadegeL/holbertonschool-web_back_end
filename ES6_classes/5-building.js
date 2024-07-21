export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Do not create Building objects directly. Use a subclass instead.');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
