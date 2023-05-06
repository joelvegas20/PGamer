
FROM node:18

WORKDIR /front

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "run" , "dev"]


