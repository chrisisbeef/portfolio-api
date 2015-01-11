FROM andreasrs/arch:latest
MAINTAINER Andreas Søvik <arsovik@gmail.com>

# update container packages and install node + its non privelidged user
RUN pacman -Syu --noconfirm \
        && pacman-db-upgrade \
        && pacman -S --noconfirm nodejs \
        && useradd -ms /bin/bash node

# copy code to container
COPY . /src

# node user permissions
RUN chown -R node:node /src

# workdir
WORKDIR /src

# user
USER node
ENV HOME /home/node

# install app
RUN npm install

#expose port
EXPOSE 8000

#environment for image defaults to production | override in docker run -e if developing or testing
ENV NODE_ENV production

# run app
CMD ["node", "server.js"]

