#Build
FROM node:alpine AS build

WORKDIR /app

COPY package*.json .
COPY . .


RUN npm ci
RUN npm run build

#NGinx server
FROM nginx:alpine AS prod-stage

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

