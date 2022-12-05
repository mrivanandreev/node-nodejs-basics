import { Worker } from 'node:worker_threads';
import { join } from 'node:path';
import { getDirname } from '../utils/getDirname.js';
import { cpus } from 'node:os';

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
  const cores = cpus();
  let magicNumber = 10;

  const workersResults = await Promise.allSettled(
    cores.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirname, 'worker.js'), {
          workerData: magicNumber++
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    }),
  );

  const results = workersResults.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }))

  console.log(results);

  return results;
};

await performCalculations();
