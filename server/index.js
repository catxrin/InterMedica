const express = require('express');

require('dotenv').config();
require('./src/config/db');

const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const port = 3000;

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
