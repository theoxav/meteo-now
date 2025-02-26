import { useState, useEffect } from 'react';
import { MeteoAPI } from '@/api/meteo.js';

export const useFetchWeather = (coords) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (coords) {
        try {
          const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coords);
          setWeather(weatherResponse);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchWeather();
  }, [coords]);

  return weather;
};
