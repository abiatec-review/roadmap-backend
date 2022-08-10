import zlib from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { __dirname } from './helper.js';

export const compress = async () => {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');

    if (existsSync(pathToFile)) {
      const gzip = zlib.createGzip();

      const read = createReadStream(pathToFile);
      const write = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
      //Transform stream which is zipping the input file
      read.pipe(gzip).pipe(write);
      console.log('Zipped Successfully');
    } else {
      throw new Error(`ZLIB operation failed  - wrong path or file doesn't exist`);
    }
  } catch (error) {
    throw new Error(`can't compress - ${error}`);
  }
};

compress();
