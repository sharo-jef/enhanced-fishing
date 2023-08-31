import { Fn } from './fn.js';

export class FnSetNbt extends Fn {
  constructor(tag) {
    super('minecraft:set_nbt', { tag });
  }

  /**
   * @param {string} tag
   * @returns {FnSetNbt}
   */
  setTag(tag) {
    this.object.tag = tag;
    return this;
  }
}
