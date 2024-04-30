const express = require('express');
const routes = require('./routes');
const app = express();


app.use(express.json());

app.use('/', routes);


app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'Resource not found'
  })
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: false,
    message: err.message
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});