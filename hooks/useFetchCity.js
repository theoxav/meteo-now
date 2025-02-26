import { useState, useEffect } from 'react';
import { MeteoAPI } from '@/api/meteo';

export const useFetchCity = (coords) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      if (coords) {
        try {
          const cityResponse = await MeteoAPI.fetchCityFromCoords(coords);
          setCity(cityResponse);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchCity();
  }, [coords]);

  return city;
};
