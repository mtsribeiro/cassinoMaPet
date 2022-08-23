const express = require('express');
const app = express();
const path = require('path');

const port = 9000;

app.use('/', express.static(path.join(__dirname, '../ui')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/home/index.html'))
})
app.get('/crash', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/crash/index.html'))
})
app.get('/double', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/double/index.html'))
})

app.listen(port, () => {
  console.log(`Servidor web em execução: http://localhost:${port}`);
});