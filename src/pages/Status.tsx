
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Status = () => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await axios.get('/api/status');
      setStatus(response.data);
    };

    fetchStatus();
  }, []);

  return (
    <div>
      <h1>System Status</h1>
      <p>API: {status.api}</p>
      <p>Database: {status.database}</p>
      <p>Website: {status.website}</p>
    </div>
  );
};

export default Status;
