FROM strapi/base

WORKDIR /app

COPY . .

RUN yarn

CMD yarn develop