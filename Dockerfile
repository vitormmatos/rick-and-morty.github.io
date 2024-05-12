# Stage 1: Compile and Build angular codebase
FROM node:lts-slim AS build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build --configuration production --aot

# Stage 2: Serve app with nginx server
FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/rick-and-morty /usr/share/nginx/html

EXPOSE 80
