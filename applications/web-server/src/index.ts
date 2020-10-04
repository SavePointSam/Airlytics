import pino from 'pino';

import logger from './services/logger';
import { startServer } from './server';

process.on(
  'uncaughtException',
  pino.final(logger, (err, finalLogger) => {
    finalLogger.error(err, 'uncaughtException');
    process.exit(1);
  }),
);

process.on(
  // @ts-ignore: 'unhandledRejection' is a valid event name
  'unhandledRejection',
  pino.final(logger, (err, finalLogger) => {
    finalLogger.error(err, 'unhandledRejection');
    process.exit(1);
  }),
);

(() => {
  try {
    startServer();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
})();
