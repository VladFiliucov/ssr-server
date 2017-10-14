const express = require('express');
const app = express();

const port = 9090;

app.get('/', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
