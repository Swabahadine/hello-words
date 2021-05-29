FROM node:14
# Create app directory
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
# Install app dependencies
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["yarn", "start"]
