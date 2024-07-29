
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Mock user creation
  const user = { id: Date.now(), name, email, password: hashedPassword };
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Mock user lookup
  const user = { id: 1, name: 'Test User', email, password: await bcrypt.hash(password, 10) };
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router;
