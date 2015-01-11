FROM andreasrs/arch:latest
MAINTAINER Andreas Søvik <arsovik@gmail.com>

# update container packages
RUN pacman -Syu --noconfirm

# update pacman db if needed
RUN pacman-db-upgrade

# nodejs
RUN pacman -S --noconfirm nodejs

# copy code to container
COPY . /src

# workdir
WORKDIR /src

# install app
RUN npm install

#expose port
EXPOSE 8000

#environment for image defaults to production | override in docker run -e if developing or testing
ENV NODE_ENV production

# run app
CMD ["node", "server.js"]

