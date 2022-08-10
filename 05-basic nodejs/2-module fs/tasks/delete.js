import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import path from 'path';
import { __dirname } from './helper.js';

(async function () {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    if (existsSync(pathToFile)) {
      await unlink(pathToFile, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      console.info(`successfully deleted ${pathToFile}`);
    } else {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    console.error(`can't delete, there was an error:`, error.message);
  }
})();
