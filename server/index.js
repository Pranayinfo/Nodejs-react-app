const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Knovator technical interview task for DevOps');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

