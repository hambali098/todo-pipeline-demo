FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

ENV PORT=3011

EXPOSE 3011

CMD ["npm", "start"]