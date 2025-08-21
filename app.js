const express = require('express');
const app = express();
const PORT = 4000;

app.get('/ui', (req, res) => {
  res.send('CI/CD Pipeline with Jenkins, Docker ! 4:58');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
