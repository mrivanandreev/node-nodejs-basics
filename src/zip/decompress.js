import { pipeline } from 'node:stream';
import { join } from 'node:path';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const decompress = async () => {
  const input = createReadStream(join(__dirname, 'files/archive.gz'));
  const gzip = createUnzip();
  const output = createWriteStream(join(__dirname, 'files/fileToCompress.txt'));

  pipeline(input, gzip, output, (error) => {
    if (error) {
      console.error('Pipeline failed.', err);
    }
  });
};

await decompress();
