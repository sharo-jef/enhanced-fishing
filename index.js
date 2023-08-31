import { writeFile } from 'fs/promises';

import { Enchantment } from './lib/enchantment.js';
import { ItemEntry } from './lib/entry.js';
import { FnEnchantment } from './lib/fnEnchantment.js';
import { LootTable } from './lib/lootTable.js';
import { Pool } from './lib/pool.js';

const entries = [];

// --- Entry 追加 ここから ---

entries
  .push(
    new ItemEntry()
      .addFunction(
        new FnEnchantment()
          .addEnchantment(new Enchantment('minecraft:sharpness', 5)),
      )
      .setWeight(5),
  );

entries
  .push(
    new ItemEntry()
      .addFunction(
        new FnEnchantment()
          .addEnchantment(new Enchantment('minecraft:sharpness', 6)),
      )
      .setWeight(4),
  );

entries
  .push(
    new ItemEntry()
      .addFunction(
        new FnEnchantment()
          .addEnchantment(new Enchantment('minecraft:sharpness', 7)),
      )
      .setWeight(3),
  );

entries
  .push(
    new ItemEntry()
      .addFunction(
        new FnEnchantment()
          .addEnchantment(new Enchantment('minecraft:sharpness', 8)),
      )
      .setWeight(2),
  );

entries
  .push(
    new ItemEntry()
      .addFunction(
        new FnEnchantment()
          .addEnchantment(new Enchantment('minecraft:sharpness', 9)),
      ),
  );

// --- Entry 追加 ここまで ---

const pool = new Pool(1, 0, entries, void 0);
const lootTable = new LootTable([pool]);

const result = lootTable.toJson();
writeFile('./data/minecraft/loot_tables/gameplay/fishing/treasure.json', result, 'utf-8');
console.log(result);
