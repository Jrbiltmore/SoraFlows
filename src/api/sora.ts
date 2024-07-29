
import axios from 'axios';
import { API_ENDPOINT, API_KEY, TIMEOUT, MAX_RETRIES } from '../config/apiConfig';
import logger from '../utils/logger';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: TIMEOUT,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

const retryRequest = async (fn, retries) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      logger.warn(`Retrying request... ${retries} attempts left`);
      return retryRequest(fn, retries - 1);
    }
    throw error;
  }
};

export const generateVideo = async (prompt: string) => {
  try {
    const response = await retryRequest(() => axiosInstance.post('/generate', { prompt }), MAX_RETRIES);
    logger.info('Video generated successfully', { prompt, response: response.data });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    logger.error('Axios error', { message: error.message, response: error.response?.data });
  } else {
    logger.error('Unknown error', { error });
  }
  throw error;
};

export const getVideoStatus = async (videoId: string) => {
  try {
    const response = await retryRequest(() => axiosInstance.get(`/status/${videoId}`), MAX_RETRIES);
    logger.info('Fetched video status successfully', { videoId, response: response.data });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
