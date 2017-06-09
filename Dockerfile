FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y libpng-dev
RUN apt-get update && apt-get install yarn

COPY . /rian
WORKDIR /rian
CMD ["./scripts/aws/wait-for-it.sh","mongodb:27017","--","./scripts/aws/BeforeDockerCompose.sh"]
