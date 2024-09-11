import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_YOUTUBE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

export const fetchApiFromYoutubeData = async (enpoints: string, params: any) => {
  try {
    const response = await axios.get(`${BASE_URL}${enpoints}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error fetching data: ' + error);
  }
};
