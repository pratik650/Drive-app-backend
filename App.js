require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./src/config/Db');
const cors = require('cors');


const app = express();
// Database connection
dbConfig.connect();
//Import cores
app.use(cors());
// Middlewares
app.use(express.json());

// Import routes
const userRoutes = require('./src/routes/Userroute');
app.use('/api/users', userRoutes);

const driverRoutes = require('./src/routes/Driverroute');
app.use('/api/drivers', driverRoutes);



app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/', (req, res) => res.send("request fulfilled"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
