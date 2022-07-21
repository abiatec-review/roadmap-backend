import { existsSync, copyFile, readdir, mkdir } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';

export const copy = async () => {
  const pathToFiles = path.join(__dirname, 'files');
  const pathToFilesCopy = path.join(__dirname, 'files_copy');

  if (!existsSync(pathToFiles) && existsSync(pathToFilesCopy)) {
    throw new Error('FS operation failed');
  }
  await mkdir(pathToFilesCopy, (err) => {
    if (err) throw err;
    console.info('mkdir operation succeed');
  });
  await readdir(pathToFiles, (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    for (let i = 0; i < files.length; i += 1) {
      // Do whatever you want to do with the file
      copyFile(path.join(pathToFiles, files[i]), path.join(pathToFilesCopy, files[i]), (err) => {
        if (err) throw err;
        console.info('FS operation succeed');
      });
    }
  });
};
copy();
