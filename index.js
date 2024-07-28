const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const app = express();
const port = 3000;

app.get('/api/:file', (req, res) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, 'data', `${fileName}.csv`);

  if (fs.existsSync(filePath)) {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.json(results);
      });
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
