import { Text, View } from 'react-native';
import { getWeatherInterpretation } from '@/utils/meteo.js';

import MeteoBasic from '@/components/MeteoBasic/MeteoBasic.jsx';
import { s } from './Home.style.js';
import { useFetchWeather } from '@/hooks/useFetchWeather.js';
import { useFetchCity } from '@/hooks/useFetchCity.js';
import { useLocation } from '@/hooks/useLocation.js';
import MeteoAdvanced from '@/components/MeteoAdvanced/MeteoAdvanced.jsx';

export default function Home() {
  const coords = useLocation();
  const weather = useFetchWeather(coords);
  const city = useFetchCity(coords);
  const currentWeather = weather?.current_weather;

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
        <MeteoAdvanced />
      </View>
    </>
  ) : null;
}
