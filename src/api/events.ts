
import express from 'express';

const router = express.Router();

const events = [
  { id: 1, name: 'Event One', description: 'This is the first event.', date: '2024-08-01' },
  { id: 2, name: 'Event Two', description: 'This is the second event.', date: '2024-09-15' },
];

router.get('/', (req, res) => {
  res.json(events);
});

export default router;
