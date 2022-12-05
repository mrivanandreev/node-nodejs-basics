import { createWriteStream } from 'node:fs'
import { join } from 'node:path';
import { getDirname } from '../utils/getDirname.js';

const __dirname = getDirname(import.meta.url);

const write = async () => {
    const stream = createWriteStream(join(__dirname, 'files/fileToWrite.txt'), { encoding: 'utf-8' });
    process.stdin.pipe(stream);
};

await write();