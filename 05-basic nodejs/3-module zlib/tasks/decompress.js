import zlib from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { __dirname } from './helper.js';

export const decompress = async () => {
  try {
    const pathToFile = path.join(__dirname, 'files', 'archive.gz');

    if (existsSync(pathToFile)) {
      const unzip = zlib.createUnzip();

      const read = createReadStream(pathToFile);
      const write = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
      //Transform stream which is zipping the input file
      read.pipe(unzip).pipe(write);
      console.log('Zipped Successfully');
    } else {
      throw new Error(`ZLIB operation failed  - wrong path or file doesn't exist`);
    }
  } catch (error) {
    throw new Error(`can't compress - ${error}`);
  }
};

decompress();
