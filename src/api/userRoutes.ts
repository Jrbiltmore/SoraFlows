
import express from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', (req, res) => {
  // Mock login implementation
  const token = 'mock-jwt-token';
  res.json({ token });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router;
