
import express from 'express';
import path from 'path';
import userRoutes from './api/userRoutes';
import videoStatusRoutes from './api/videoStatus';
import registerRoutes from './api/register';
import contactRoutes from './api/contact';
import blogRoutes from './api/blog';
import newsletterRoutes from './api/newsletter';
import eventsRoutes from './api/events';
import galleryRoutes from './api/gallery';
import supportRoutes from './api/support';
import statusRoutes from './api/status';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/videos', videoStatusRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/status', statusRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
