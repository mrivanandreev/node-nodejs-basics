import { argv } from 'node:process';

const parseArgs = () => {
  const resultArray = [];

  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      resultArray.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
      i++;
    }
  }

  console.log(resultArray.join(', '));
};

parseArgs();
