import { existsSync, createReadStream, createWriteStream, readdir, mkdir } from 'fs';
import path from 'path';
import { __dirname } from './helper.js';

const copy = async () => {
  try {
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
      if (files.length) {
        for (let i = 0; i < files.length; i += 1) {
          const f = files[i];
          const fr = createReadStream(path.join(pathToFiles, f));
          const fw = createWriteStream(path.join(pathToFilesCopy, f));

          fr.on('data', (chunk) => {
            fw.write(chunk);
          });

          fr.on('end', () => {
            fw.end();
            console.log(`file ${f} reading is finished`);
          });
          // without stream
          // copyFile(path.join(pathToFiles, files[i]), path.join(pathToFilesCopy, files[i]), (err) => {
          //   if (err) throw err;
          //   console.info('FS operation succeed');
          // });
        }
      }
    });
  } catch (error) {
    throw new Error(`can't copy - ${error}`);
  }
};
copy();
