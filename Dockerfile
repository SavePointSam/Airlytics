FROM bitnami/node:14.13.0 as base

################################################################################
FROM base as builder

RUN mkdir /app -p
WORKDIR /app

COPY ./ ./

RUN yarn install --frozen-lockfile --non-interactive
RUN yarn workspace @airlytics/web-server run build
RUN yarn workspace @airlytics/website run build

################################################################################
FROM base as final

ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/applications/website/build /var/www/html/
COPY --from=builder /app/applications/web-server/build /app/

RUN yarn install --frozen-lockfile --non-interactive --production

CMD node ./server.js
