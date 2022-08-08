import { existsSync, writeFile } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';

export const create = async () => {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

    if (existsSync(pathToFile)) {
      throw new Error('FS operation failed');
    } else {
      await writeFile(pathToFile, 'I am fresh and young', (err) => {
        if (err) throw err;
        console.info('FS operation succeed');
      });
    }
  } catch (error) {
    throw new Error(`can't create - ${error}`);
  }
};

create();
