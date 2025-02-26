import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { MeteoAPI } from '../../api/meteo.js';
import { getWeatherInterpretation } from '../../utils/meteo.js';

import { Text, View } from 'react-native';
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic.jsx';

import { s } from './Home.style.js';

export default function Home() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const currentWeather = weather?.current_weather;

  const getUserCoords = async () => {
    let { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: '48.85', lng: '2.35' });
    }
  };

  const fetchWeather = async (coordinates) => {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  };

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city="Todo"
          interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
        />
      </View>
      <View style={s.searchbar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  ) : null;
}
