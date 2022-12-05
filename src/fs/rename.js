import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { rename as rn } from 'node:fs/promises';
import { ERROR_MESSAGE } from '../utils/constants.js';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

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

await rename();
