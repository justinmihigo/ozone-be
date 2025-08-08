# Use official Node.js LTS image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the source code
COPY . .

COPY .env  ./
# Build the NestJS app
RUN npm run build

# Expose the port (default NestJS port)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]