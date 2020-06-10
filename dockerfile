FROM node:8.14.0-alpine as builder

RUN mkdir -p /app

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15.7-alpine
RUN rm -rf /etc/nginx/conf.d
COPY src/config/nginx /etc/nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]