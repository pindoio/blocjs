FROM node:14.4-alpine

WORKDIR /home/blocjs
COPY ./package.json .
COPY ./packages ./packages

RUN addgroup -S blocjsgroup
RUN adduser -S -D -h /home/blocjs blocjs blocjsgroup
RUN chown -R blocjs:blocjsgroup /home/blocjs
USER blocjs

RUN yarn workspace blocjs install
RUN yarn workspace docs install

WORKDIR /home/blocjs/packages/docs

EXPOSE ${PORT}
CMD ["yarn", "start"]
