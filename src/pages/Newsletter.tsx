
import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newsletter/subscribe', { email });
      setStatus('Subscription successful');
    } catch (error) {
      setStatus('Subscription failed');
    }
  };

  return (
    <div>
      <h1>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Newsletter;
