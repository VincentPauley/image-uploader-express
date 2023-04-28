const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

console.log();

app.get('/', (req, res) => {
  res.send('something for fun');
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port: ', process.env.PORT);
});
