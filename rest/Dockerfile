# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Add the rest of the code from the current directory to the /app directory in the container
ADD . /app

# Install git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# Clone your repo
RUN git clone https://github.com/bezkoder/nodejs-express-sequelize-mysql.git

# Set the working directory in the container to /app/nodejs-express-sequelize-mysql
WORKDIR /app/nodejs-express-sequelize-mysql

# Install any needed packages specified in package.json
RUN npm install

RUN node server.js

ENV PORT=6969

EXPOSE 6969


# Run the app when the container launches
CMD ["npm", "start"]