
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const status = {
    api: 'Operational',
    database: 'Operational',
    website: 'Operational'
  };
  res.json(status);
});

export default router;
