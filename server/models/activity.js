import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  progress: { type: Number, default: 0 },
  goal: { type: Number, required: true },
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;
