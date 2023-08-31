export class Fn {
  constructor(type, object) {
    this.type = type;
    this.object = object;
  }

  toObject() {
    return {
      function: this.type,
      ...this.object,
    };
  }
}
