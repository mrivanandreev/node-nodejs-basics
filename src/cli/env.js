import { env } from 'node:process';

const parseEnv = () => {
  const arrayOfProps = Object.entries(env);
  const resultArray = arrayOfProps.reduce((acc, [key, value]) => {
    if (key.startsWith('RSS')) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, [])

  console.log(resultArray.join('; '));
};

parseEnv();
