const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();

// Public Directory
app.use(express.static('public'));

// DB
dbConnection();

// Body Parser
app.use(express.json());

// Routes
app.use('/api/profile', require('./routes/profile'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});