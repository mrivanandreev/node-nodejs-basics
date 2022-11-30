import { dirname, resolve, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

list();
