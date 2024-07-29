
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('/api/gallery/images');
      setImages(response.data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.url} alt={image.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
