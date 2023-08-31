export class LootTable {
  constructor(
    pools = [],
    type = 'minecraft:fishing',
    randomSequence = 'minecraft:gameplay/fishing/treasure',
  ) {
    this.type = type;
    this.pools = pools;
    this.randomSequence = randomSequence;
  }

  toObject() {
    return {
      type: this.type,
      pools: this.pools.map(pool => pool.toObject()),
      random_sequence: this.randomSequence,
    };
  }

  /**
   * @param {number} indent
   * @returns {string}
   */
  toJson(indent = 4) {
    return JSON.stringify(this.toObject(), null, indent);
  }
}
