import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
    const stream = createReadStream(join(__dirname, 'files/fileToRead.txt'), { encoding: 'utf-8' });
    stream.pipe(process.stdout);
};

await read();