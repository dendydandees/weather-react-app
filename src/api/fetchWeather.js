import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b9cec763b4fa07a1859041509e2c6763';

export const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      appid: API_KEY,
    },
  });
  const data = await response.data;

  return data;
};
