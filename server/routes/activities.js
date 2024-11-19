import express from 'express';
import User from '../models/progress.js';

const router = express.Router();

// Endpoint to update activity progress
router.post('/updateActivity', async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user is authenticated and user ID is attached to the request
    const { activityIndex, progress } = req.body;

    // Find the user and update the specific activity
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const activity = user.activities[activityIndex];
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Update the activity's progress
    activity.progress = progress;

    // Save the updated user document
    await user.save();

    res.json({ activity });
  } catch (error) {
    console.error('Error updating activity progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
