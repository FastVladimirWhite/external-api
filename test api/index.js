const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('VLPE API is running');
});

app.listen(PORT, () => {
  console.log(`VLPE API listening on port ${PORT}`);
});
