import { Fn } from './fn.js';

export class ItemEntry {
  /**
   * @param {string} name item name
   * @param {number} weight weight
   */
  constructor(name = 'minecraft:enchanted_book', weight = 1, functions = []) {
    this.type = 'minecraft:item';
    this.name = name;
    this.weight = weight;
    this.functions = functions;
  }

  /**
   * @param {string} type
   * @returns {ItemEntry}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * @param {string} name
   * @returns {ItemEntry}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * @param {number} weight
   * @returns {ItemEntry}
   */
  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  /**
   * @param {Fn} fn function
   * @returns {ItemEntry}
   */
  addFunction(fn) {
    this.functions.push(fn);
    return this;
  }

  /**
   * @returns {object} object
   */
  toObject() {
    return {
      type: this.type,
      name: this.name,
      weight: this.weight,
      functions: this.functions.map(fn => (fn instanceof Fn ? fn.toObject() : fn)),
    };
  }
}
