import pino from 'pino';
// @ts-ignore: no types available
import pinoDebug from 'pino-debug';

const isDevelopment = process.env.NODE_ENV === 'development';
const baseLogLevel = isDevelopment
  ? process.env.AIRLYTICS_LOG_LEVEL || 'debug'
  : 'info';

const logger = pino({
  name: 'airlytics:server',
  level: baseLogLevel,
  prettyPrint:
    isDevelopment === true
      ? { translateTime: true, ignore: 'pid,hostname' }
      : false,
  timestamp: pino.stdTimeFunctions.epochTime,
});

pinoDebug(logger, {
  map: {
    'airlytics:*': baseLogLevel,
    '*': 'trace',
  },
});

export default logger;
