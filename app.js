const express = require('express'); // ? Referer express som er i package.json (i dependency)
const app = express(); // ? Lar oss bruke express i applikasjonen

// ? Lar webserveren (express), høre på en spesifikk port
app.listen(3000, () => {
  console.log('Eeeeeeeeey');
});

// ? Kjør get når vi er i path '/'
app.get('/', (req, res) => {
  res.send('Welcome to the home page bby');
});
