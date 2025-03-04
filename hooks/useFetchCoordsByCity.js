import { useState, useEffect } from 'react';
import { MeteoAPI } from '@/api/meteo';

export const useFetchCoordsByCity = (city) => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordsByCity = async () => {
      if (city) {
        const coordsResponse = await MeteoAPI.fetchCoordsFromCity(city);
        if (coordsResponse.error) {
          setError(coordsResponse.error);
        } else {
          setCoords(coordsResponse);
        }
      }
    };

    fetchCoordsByCity();
  }, [city]);

  return { coords, error };
};
