import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { rename as rn } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const oldName = resolve(__dirname, 'files/wrongFilename.txt');
  const newName = resolve(__dirname, 'files/properFilename.md');

  const oldFileExist = existsSync(oldName);
  const newFileExist = existsSync(newName);

  if (!oldFileExist || newFileExist) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    await rn(oldName, newName);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

rename();
