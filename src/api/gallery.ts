
import express from 'express';

const router = express.Router();

const images = [
  { id: 1, title: 'Image One', url: 'https://example.com/image1.jpg' },
  { id: 2, title: 'Image Two', url: 'https://example.com/image2.jpg' },
];

router.get('/images', (req, res) => {
  res.json(images);
});

export default router;
