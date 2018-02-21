# Stage 1 - the build process
FROM node:8 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY src ./src
COPY tasks ./tasks
COPY crossbow.yaml index.js parcel-plugin-render.js tsconfig.json workbox-cli-config.js build.js .htmlnanorc.js ./
RUN yarn build-all

# Stage 2 - the production environment
#
# Builder
#
FROM abiosoft/caddy:builder as builder

ARG version="0.10.10"
ARG plugins="git"

RUN VERSION=${version} PLUGINS=${plugins} /bin/sh /usr/bin/builder.sh

#
# Final stage
#
FROM alpine:3.6
LABEL maintainer "Shane Osbourne <shane.osbourne8@gmail.com>"

LABEL caddy_version="0.10.10"

RUN apk add --no-cache openssh-client git

# install caddy
COPY --from=builder /install/caddy /usr/bin/caddy

# validate install
RUN /usr/bin/caddy -version
RUN /usr/bin/caddy -plugins

EXPOSE 80 443
VOLUME /root/.caddy
WORKDIR /srv

COPY Caddyfile.prod /etc/Caddyfile
COPY --from=build-deps /usr/src/app/dist /srv

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]

