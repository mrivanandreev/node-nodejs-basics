import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const getDirname = (url) => dirname(fileURLToPath(url));