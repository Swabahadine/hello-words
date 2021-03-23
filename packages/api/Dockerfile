FROM node:14

# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 9003
CMD [ "npm", "start" ]