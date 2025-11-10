FROM node:24
WORKDIR /app

COPY . .
RUN npm install --frozen-lockfile && npm run build

EXPOSE 3000/tcp
ENTRYPOINT [ "npm", "run", "start" ]
