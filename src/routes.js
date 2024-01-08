const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

app.use('/', homeRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});