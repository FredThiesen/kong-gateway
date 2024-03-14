# Use the official image as a parent image
FROM mysql:latest

# Set the working directory in the container
WORKDIR /docker-entrypoint-initdb.d



# Expose port 3306 to the outside world
EXPOSE 3306

# Run the command on container startup
CMD ["mysqld"]