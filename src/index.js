import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
const port = 9090;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
