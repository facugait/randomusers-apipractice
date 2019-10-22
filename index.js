const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
PORT = process.env.PORT;

app.use(express.json());
app.use('/', require('./src/application/routes'));

app.listen(PORT, () => {
  console.log(`App on port ${PORT}`);    
});
