import express from 'express';
import data from './data.js';

const app = express();
app.get('/api/monuments', (req, res) => {
    res.send(data.Monuments);
  });

  const port = process.env.PORT || 8000; 
  app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});