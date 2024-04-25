// Importation du module Express
const express = require('express');

// Création d'une nouvelle application Express
const app = express();

// Définition du port
const port = 3000;

// Configuration de la route d'accueil
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});