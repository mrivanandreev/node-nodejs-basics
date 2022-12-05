import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const readable = process.stdin;
  const writeable = process.stdout;

  const reverseStream = new Transform({
    transform(chunk, _, done) {
      console.log(chunk);
      const chunkToString = chunk.toString().trim();
      const reverseString = chunkToString.split('').reverse().join('');

      this.push(reverseString + '\n');

      done();
    },
  });

  pipeline(readable, reverseStream, writeable, (error) => {
    throw error;
  });
};

await transform();
