FROM node:lts-alpine

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH
ENV PUBLIC_PATH=/
ARG API_URL

RUN npm install @vue/cli@5.0.8 -g
RUN npm install -g http-server

COPY . .

RUN npm install
RUN echo "VUE_APP_API_URL=${API_URL}" >> .env.production && npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
