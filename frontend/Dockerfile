# Stage 1 - Build
FROM node:20-alpine as builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build aplikasi
RUN npm run build

# Stage 2 - Nginx
FROM nginx:alpine
# Copy hasil build static
COPY --from=builder /app/out /usr/share/nginx/html
# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]