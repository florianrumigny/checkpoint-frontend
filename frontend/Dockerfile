FROM node:22-alpine3.21

WORKDIR /app

COPY package.json package.json
# needed to get exactly the same packages versions as the host machine
COPY package-lock.json package-lock.json
RUN npm install

# do not use this because it copies node_modules and may cause some incohrence between operating systems
# COPY . .

COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.node.json tsconfig.node.json
COPY vite.config.ts vite.config.ts
COPY index.html index.html
COPY public public
COPY src src
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js

EXPOSE 5173

CMD ["npm", "run", "dev"]