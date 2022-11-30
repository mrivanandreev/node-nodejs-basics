import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';
import { CREATE_FILE_DATA, ERROR_MESSAGE } from '../utils/constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url))

const create = async () => {
  try {
    await writeFile(resolve(__dirname, 'files/fresh.txt'), CREATE_FILE_DATA, { flag: 'wx' });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

create();
