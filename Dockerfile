# Etapa 1: Build do React
FROM ubuntu:22.04 AS build

RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir arquivos com Nginx
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y nginx \
    && rm -rf /var/lib/apt/lists/*

# Copia arquivos do build para a pasta padrão do Nginx
COPY --from=build /app/dist /var/www/html

# Expõe a porta do Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
