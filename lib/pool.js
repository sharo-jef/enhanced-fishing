export class Pool {
  constructor(rolls = 1, bonusRolls = 0, entries = [], conditions = []) {
    this.rolls = rolls;
    this.entries = entries;
    this.conditions = conditions;
    this.bonusRolls = bonusRolls;
  }

  toObject() {
    return {
      rolls: this.rolls,
      entries: this.entries.map(entry => entry.toObject()),
      conditions: this.conditions,
      bonus_rolls: this.bonusRolls,
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
