const mongoose = require('mongoose');

// Define schema for user data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add any other user-related fields here
});

// Define schema for menstrual cycle tracking data
const menstrualCycleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  flowIntensity: { type: String, required: true },
  symptoms: [{ type: String }],
  // Add any other cycle-related fields here
});

// Define schema for personalized recommendations
const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recommendationText: { type: String, required: true },
  // Add any other recommendation-related fields here
});

// Define models
const User = mongoose.model('User', userSchema);
const MenstrualCycle = mongoose.model('MenstrualCycle', menstrualCycleSchema);
const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = { User, MenstrualCycle, Recommendation };
