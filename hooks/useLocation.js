import { useState, useEffect } from 'react';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';

export const useLocation = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const getUserCoords = async () => {
      let { status } = await requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await getCurrentPositionAsync();
        setCoords({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } else {
        setCoords({ lat: '48.85', lng: '2.35' }); // Default coordinates (Paris)
      }
    };

    getUserCoords();
  }, []);

  return coords;
};
