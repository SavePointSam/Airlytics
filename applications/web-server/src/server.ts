import path from 'path';
import express from 'express';
import createCorsMiddleware from 'cors';
import createPinoMiddleware from 'express-pino-logger';

import logger from './services/logger';
import config from './config';

export function startServer() {
  const APP_PATH = path.resolve('/var/www/html');
  const server = express();

  // NOTE: enable CORS
  server.use(createCorsMiddleware());

  // NOTE: log with pino
  server.use(createPinoMiddleware({ logger }));

  // NOTE: serve web bundle
  server.use(express.static(APP_PATH));

  // NOTE: define healthcheck
  server.get('/healthcheck', (request, response) => {
    logger.trace(request, 'healthcheck');

    response.status(200).send('OK');
  });

  // NOTE: always respond with index.html otherwise
  server.get('/*', (_, res) => {
    res.sendFile(path.join(`${APP_PATH}/index.html`));
  });

  return server.listen(config.port, () => {
    logger.info(
      `@airlytics/server ready at http://localhost:${config.port} 🚀`,
    );
  });
}
