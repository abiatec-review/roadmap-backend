import { existsSync, readdir } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';

(async function () {
  try {
    const pathToFiles = path.join(__dirname, 'files');

    if (existsSync(pathToFiles)) {
      await readdir(pathToFiles, (err, files) => {
        //handling error
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
        if (files.length) {
          for (let i = 0; i < files.length; i += 1) {
            console.info(files[i]);
          }
        }
      });
    } else {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    console.error(`can't list filenames, there was an error:`, error.message);
  }
})();
