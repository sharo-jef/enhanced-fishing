export class Enchantment {
  /**
   * @param {string} name enchantment name
   * @param {number} level enchantment level
   */
  constructor(name = null, level = 1) {
    this.name = name;
    this.level = level;
  }

  /**
   * @param {string} name enchantment name
   * @returns {Enchantment}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * @param {number} level enchantment level
   * @returns {Enchantment}
   */
  setLevel(level) {
    this.level = level;
    return this;
  }

  /**
   * @returns {string} nbt string
   */
  toNbt() {
    return `{id:"${this.name}",lvl:${this.level}s}`;
  }

  /**
   * @param {{name:string,level:number}} object
   * @returns {Enchantment}
   */
  static fromObject(object) {
    return new Enchantment(object.name, object.level);
  }
}
