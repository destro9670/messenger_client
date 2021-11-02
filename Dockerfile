FROM alpine/git

WORKDIR /root/

ARG gitpwd

RUN git clone https://destro9670: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@github.com/destro9670/webreport

FROM node:10

COPY --from=0  /root/webreport/client /root/client

WORKDIR /root/client

RUN npm install
RUN npm install react-scripts
RUN npm audit fix


CMD ["npm", "start"]
