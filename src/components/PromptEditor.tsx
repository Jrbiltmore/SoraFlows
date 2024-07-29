
import React, { useState } from 'react';
import { generateVideo } from '../api/sora';
import logger from '../utils/logger';

const PromptEditor = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const videoData = await generateVideo(prompt);
      setVideoUrl(videoData.url);
      setHistory([...history, { prompt, videoUrl: videoData.url }]);
      logger.info('Video generated', { prompt, videoData });
    } catch (err) {
      setError('Failed to generate video. Please try again.');
      logger.error('Error generating video', { prompt, err });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Video'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videoUrl && <video src={videoUrl} controls />}
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.prompt} - <a href={item.videoUrl}>View Video</a></li>
        ))}
      </ul>
    </div>
  );
};

export default PromptEditor;
