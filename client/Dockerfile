# base image
FROM node:12.2.0-alpine



# set working directory within the docker container.
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /package.json
COPY package-lock.json /package-lock.json


RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent

COPY . /


# start app
CMD ["npm", "start"]
