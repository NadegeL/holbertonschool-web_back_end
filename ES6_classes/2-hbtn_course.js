export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._lenght = lenght;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._lenght = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
