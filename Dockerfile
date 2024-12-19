FROM node:latest AS builder
LABEL authors="maxime"

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:latest AS runner

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires à partir de l'étape de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.output ./.output

# Installer uniquement les dépendances de production
RUN npm ci --production

# Exposer le port sur lequel l'application écoute (par défaut 3000 pour Nuxt)
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["node", ".output/server/index.mjs"]