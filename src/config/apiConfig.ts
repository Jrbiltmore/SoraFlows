
const API_ENDPOINT = process.env.SORA_API_ENDPOINT || 'https://api.sora.openai.com';
const API_KEY = process.env.SORA_API_KEY || 'your-api-key-here';
const TIMEOUT = process.env.API_TIMEOUT || 5000;
const MAX_RETRIES = process.env.MAX_RETRIES || 3;

export { API_ENDPOINT, API_KEY, TIMEOUT, MAX_RETRIES };
