import { Enchantment } from './enchantment.js';
import { FnSetNbt } from './fnSetNbt.js';

export class FnEnchantment extends FnSetNbt {
  /**
   * @param {[import('./enchantment.js').Enchantment]} enchantments
   */
  constructor(enchantments) {
    super(`{Enchantments:[${
      enchantments && enchantments instanceof Array
        ? enchantments.map(e => (
          e instanceof Enchantment
            ? e.toNbt()
            : Enchantment.fromObject(e).toNbt)).join(',')
        : enchantments || ''}]}`);
    if (enchantments instanceof Array) {
      this.enchantments = enchantments;
    } else if (enchantments) {
      this.enchantments = [enchantments];
    } else {
      this.enchantments = [];
    }
  }

  /**
   * @param {import('./enchantment.js').Enchantment} enchantment
   * @returns {FnEnchantment}
   */
  addEnchantment(enchantment) {
    this.enchantments.push(enchantment);
    this.object.tag = `{Enchantments:[${this.enchantments.map(e => (e instanceof Enchantment ? e.toNbt() : Enchantment.fromObject(e).toNbt)).join(',')}]}`;
    return this;
  }
}
