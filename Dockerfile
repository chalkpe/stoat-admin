FROM oven/bun:1
WORKDIR /usr/src/app

RUN echo "* soft nofile 65536" >> /etc/security/limits.conf && \
    echo "* hard nofile 65536" >> /etc/security/limits.conf

COPY . .
RUN bun install --frozen-lockfile

EXPOSE 3000/tcp
ENTRYPOINT [ "bash", "-c", "ulimit -n 65536 && bun run dev" ]
