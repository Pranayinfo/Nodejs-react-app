# Stage 1: Build the client
FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create lightweight image
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Author and Maintainer Information
LABEL author="Pranay Paunikar"
LABEL maintainer="Pranay Paunikar"
