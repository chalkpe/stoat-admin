FROM oven/bun:1
WORKDIR /app

RUN echo "* soft nofile 524288" >> /etc/security/limits.conf && \
    echo "* hard nofile 524288" >> /etc/security/limits.conf

COPY . .
RUN bun install --frozen-lockfile && bun run build:server

EXPOSE 3000/tcp
ENTRYPOINT [ "bash", "-c", "ulimit -n 524288 && bun run dev" ]
