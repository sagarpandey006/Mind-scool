import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  leaves: { type: Number, default: 0 }, // Track the total number of leaves
  activities: [{
    name: { type: String, required: true },
    progress: { type: Number, default: 0 },
    goal: { type: Number, required: true },
  }]
});

const User = mongoose.model('User', userSchema);

export default User;
