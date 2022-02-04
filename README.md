# Bar-rat-ton

Le projet existe dans le cadre de l'ue Gestion de Projet de la formation M1 MIAGE

## Prérequis
 - NodeJs LTS
 - PostgreSql 13+
 - Le package @vue/cli

```
npm i -g @vue/cli
```

## Comment Executé le logiciel
Bar-rat-ton est séparé en deux programme :
 - La partie client qui contient tout le front de l'application
 - La partie srv qui contient tout le back de l'application

### Client
1. Allez dans le dossier `./client`
2. Installer les paquets npm `npm i`
3. Compiler le client `npm run build`
4. Pour lancer le serveur utilisé `npm run serve`

### Srv
1. Allez dans le dossier `./srv`
2. Installer les paquets npm `npm i`
3. Lancer le serveur `npm run start`

### Base de données
Pour initialiser la base de données il faut : 
1. Créer la base de donnée dans PgAdmin
2. Configurer le fichier `.env` en suivant le modèle du fichier `dist.env`
3. Lancer la commande dans le dossier `./srv/` : `npm run make_db` Cela va synchroniser la base de données avec le modèle de sequelize.
4. Attendre que le script se terminer

Voilà la base de données a les tables du modèles

Attention ! la base n'a pas de données.
