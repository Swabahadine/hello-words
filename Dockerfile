FROM node:14

COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .