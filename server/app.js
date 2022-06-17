const express = require('express');
const app = express();
const path = require('path');

const root = require('path').join(__dirname, 'build')

app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})


app.listen(5000, () => {
  console.log('Server is running on port 5000');
})