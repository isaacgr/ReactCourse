const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {

  app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
  })

  console.log('Server is up!');
})