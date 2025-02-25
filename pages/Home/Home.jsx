import { Text, View } from 'react-native';

import { s } from './Home.style.js';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { MeteoAPI } from '../../services/meteo.js';
import Txt from '../../components/Txt/Txt.jsx';
import { Size } from '../../constants/Size.js';

export default function Home() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);

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

  return (
    <>
      <View style={s.meteo_basic}>
        <Txt style={{ fontSize: Size.XL }}>Hello</Txt>
      </View>
      <View style={s.searchbar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
}
