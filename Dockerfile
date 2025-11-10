FROM --platform=linux/amd64 node:24
WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    libstdc++6 \
    libssl3 \
    zlib1g \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000/tcp
ENTRYPOINT [ "npm", "run", "start" ]
