FROM node:16.13-alpine
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]