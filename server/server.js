const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('HealthCare MERN App API is running...');
});

// Import routes (uncomment when ready)
const patientRoutes = require('./routes/patientRoutes');
app.use('/api/patients', patientRoutes);

// Authentication routes
// import authRoutes from "./routes/authRoutes.js";
// app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
