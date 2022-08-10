import { existsSync } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';
import { rename } from 'fs/promises';

(async function () {
  try {
    const pathToFile = path.join(__dirname, 'files', 'wrongFilename.txt');

    if (existsSync(pathToFile)) {
      const pathToNewFile = path.join(__dirname, 'files', 'properFilename.txt');
      rename(pathToFile, pathToNewFile, function (err) {
        if (err) console.log('ERROR: ' + err);
      });
    } else {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    console.error(`can't rename, there was an error:`, error.message);
  }
})();
