import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cp } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    await cp(resolve(__dirname, 'files'), resolve(__dirname, 'files_copy'), {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
