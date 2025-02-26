import { View } from 'react-native';
import { getWeatherInterpretation } from '@/utils/meteo.js';

import MeteoBasic from '@/components/MeteoBasic/MeteoBasic.jsx';
import { s } from './HomeScreen.style.js';
import { useFetchWeather } from '@/hooks/useFetchWeather.js';
import { useFetchCity } from '@/hooks/useFetchCity.js';
import { useLocation } from '@/hooks/useLocation.js';
import MeteoAdvanced from '@/components/MeteoAdvanced/MeteoAdvanced.jsx';

export default function HomeScreen() {
  const coords = useLocation();
  const weather = useFetchWeather(coords);
  const city = useFetchCity(coords);
  const currentWeather = weather?.current_weather;

  const getSunTime = (type) => {
    const time = weather?.daily?.[type]?.[0]?.split('T')[1];
    return time || 'N/A';
  };

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
        />
      </View>
      <View style={s.searchbar}></View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather?.windspeed}
          dusk={getSunTime('sunset')}
          dawn={getSunTime('sunrise')}
        />
      </View>
    </>
  ) : null;
}
