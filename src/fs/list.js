import { resolve, parse } from 'node:path';
import { readdir } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
  const dirPath = resolve(__dirname, 'files');

  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      const parsedFile = parse(file);
      console.log(parsedFile.name);
    }
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
