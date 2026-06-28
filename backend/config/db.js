const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[Database] MongoDB Securely Engaged: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] Connection Failure: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;