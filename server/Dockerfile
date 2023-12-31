# Stage 1: Build the server
FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Create lightweight image
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 5000
CMD ["node", "index.js"]

# Author and Maintainer Information
LABEL author="Pranay Paunikar"
LABEL maintainer="Pranay Paunikar"
