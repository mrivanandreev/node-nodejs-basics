import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../utils/getDirname.js';

const { createHash } = await import('node:crypto');

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
  const content = await readFile(
    join(__dirname, 'files/fileToCalculateHashFor.txt'),
    {
      encoding: 'utf-8',
    },
  );

  console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();
