import { existsSync, createReadStream } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';

(async function () {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    if (existsSync(pathToFile)) {
      const fr = createReadStream(pathToFile, 'UTF-8');

      fr.on('data', (chunk) => {
        console.log(chunk);
      });

      fr.on('end', () => {
        console.log(`fileToRead.txt reading is finished`);
      });
    } else {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    console.error(`can't read, there was an error:`, error.message);
  }
})();
