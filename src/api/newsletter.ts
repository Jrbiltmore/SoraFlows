
import express from 'express';

const router = express.Router();

const subscribers = [];

router.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (subscribers.includes(email)) {
    return res.status(400).send('Already subscribed');
  }
  subscribers.push(email);
  res.status(200).send('Subscription successful');
});

export default router;
