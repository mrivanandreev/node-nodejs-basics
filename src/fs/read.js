import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  try {
    const fileContent = await readFile(
      resolve(__dirname, 'files/fileToRead.txt'),
      { encoding: 'utf-8' },
    );
    console.log(fileContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
