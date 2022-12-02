import { resolve } from 'node:path';
import { rm } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const filePath = resolve(__dirname, 'files/fileToRemove.txt');

  try {
    await rm(filePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

remove();
