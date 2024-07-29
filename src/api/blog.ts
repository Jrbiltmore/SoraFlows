
import express from 'express';

const router = express.Router();

const posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

router.get('/posts', (req, res) => {
  res.json(posts);
});

export default router;
