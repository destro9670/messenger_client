FROM alpine/git

WORKDIR /root/

ARG gitpwd

RUN git clone https://github.com/destro9670/messenger_client

FROM node:10

COPY --from=0  /root/messenger_client /root/client

WORKDIR /root/client

RUN npm install
RUN npm install react-scripts
RUN npm audit fix


CMD ["npm", "start"]