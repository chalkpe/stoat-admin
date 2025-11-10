FROM oven/bun:1
WORKDIR /usr/src/app

COPY . .
RUN bun install --frozen-lockfile

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "dev" ]
