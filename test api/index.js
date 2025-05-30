const express = require('express');  // import express
const app = express();               // stwórz instancję aplikacji

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('VLPE API is running');
});

app.listen(PORT, () => {
  console.log(`VLPE API listening on port ${PORT}`);
});
