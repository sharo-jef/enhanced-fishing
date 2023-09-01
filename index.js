import { readFile, readdir, writeFile } from 'fs/promises';
import { sep } from 'path';

import { parse } from 'yaml';

(await Promise.all((await readdir('./data', { recursive: true, withFileTypes: true }))
  .filter(dirent => dirent.isFile())
  .filter(file => file.name.match(/\.ya?ml$/))
  .map(file => `${file.path}${sep}${file.name}`)
  .map(async path => ({
    path,
    JSONObject: parse(await readFile(path, 'utf-8')),
    JSONPath: path.replace(/\.ya?ml$/, '.json'),
  }))))
  .forEach(data => writeFile(`${data.JSONPath}`, JSON.stringify(data.JSONObject, null, 4)));
