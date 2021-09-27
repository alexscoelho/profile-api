const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Public Directory
app.use(express.static('public'));

// CORS
app.use(cors());

// DB
dbConnection();

// Body Parser
app.use(express.json());

// Routes
app.use('/api/profile', require('./routes/profile'));
app.use('/api/provider', require('./routes/provider'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
