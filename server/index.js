const express = require('express');

const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const port = 3000;

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
