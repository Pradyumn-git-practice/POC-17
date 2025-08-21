const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ui', (req, res) => {
  res.send('CI/CD Pipeline with Jenkins, Docker ! 4:38');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
