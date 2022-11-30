import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const filePath = resolve(__dirname, 'files/fileToRemove.txt');

  try {
    await rm(filePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

remove();
