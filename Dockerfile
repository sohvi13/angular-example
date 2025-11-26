# 1. Build-vaihe: käännetään Angular-sovellus
FROM node:20-alpine AS build

WORKDIR /app

# Kopioidaan riippuvuustiedostot
COPY package*.json ./

RUN npm install

# Kopioidaan loput koodit
COPY . .

# Käännetään tuotantobuild
RUN npm run build -- --configuration production

# 2. Runtime-vaihe: nginx palvelee käännettyä fronttia
FROM nginx:alpine

# HUOM: vaihda 'angular-example' vastaamaan oman dist-kansiosi nimeä
COPY --from=build /app/dist/angular-example/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
