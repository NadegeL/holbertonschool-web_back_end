const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = app;
}
