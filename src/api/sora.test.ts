
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { generateVideo, getVideoStatus } from './sora';
import { API_ENDPOINT } from '../config/apiConfig';

const mock = new MockAdapter(axios);

describe('Sora API', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should generate a video successfully', async () => {
    const prompt = 'A beautiful sunset over the ocean';
    const mockResponse = { videoUrl: 'http://example.com/video.mp4' };

    mock.onPost(`${API_ENDPOINT}/generate`).reply(200, mockResponse);

    const response = await generateVideo(prompt);
    expect(response).toEqual(mockResponse);
  });

  it('should fetch video status successfully', async () => {
    const videoId = '12345';
    const mockResponse = { status: 'completed' };

    mock.onGet(`${API_ENDPOINT}/status/${videoId}`).reply(200, mockResponse);

    const response = await getVideoStatus(videoId);
    expect(response).toEqual(mockResponse);
  });

  it('should handle errors correctly', async () => {
    const prompt = 'A beautiful sunset over the ocean';

    mock.onPost(`${API_ENDPOINT}/generate`).reply(500);

    await expect(generateVideo(prompt)).rejects.toThrow();
  });
});
