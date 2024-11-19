import express from 'express';
import User from '../models/progress.js';

const router = express.Router();

// Endpoint to get the user's current leaves count
router.get('/', async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user is authenticated and user ID is attached to the request
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ leaves: user.leaves });
  } catch (error) {
    console.error('Error fetching leaves:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to update the number of leaves
router.post('/', async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user is authenticated and user ID is attached to the request
    const { leaves } = req.body;

    const user = await User.findByIdAndUpdate(userId, { leaves }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ leaves: user.leaves });
  } catch (error) {
    console.error('Error updating leaves:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
