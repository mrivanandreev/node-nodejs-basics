import { pipeline } from 'node:stream';
import { join } from 'node:path';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const compress = async () => {
  const input = createReadStream(join(__dirname, 'files/fileToCompress.txt'));
  const gzip = createGzip();
  const output = createWriteStream(join(__dirname, 'files/archive.gz'));

  pipeline(input, gzip, output, (error) => {
    if (error) {
      console.error('Pipeline failed.', err);
    }
  });
};

await compress();
