const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/build')));

app.get('/name', (req, res) => {
  res.send('Agroup');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})