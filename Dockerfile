FROM node:16.13.0

RUN mkdir /backend/
WORKDIR /backend/
COPY . /backend/

EXPOSE 3000

RUN npm install --production
RUN npm install typescript
RUN npm run build

CMD [ "npm", "run", "start" ]