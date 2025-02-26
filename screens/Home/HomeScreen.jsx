import { View } from 'react-native';
import { getWeatherInterpretation } from '@/utils/meteo.js';

import MeteoBasic from '@/components/MeteoBasic/MeteoBasic.jsx';
import { s } from './HomeScreen.style.js';
import { useFetchWeather } from '@/hooks/useFetchWeather.js';
import { useFetchCity } from '@/hooks/useFetchCity.js';
import { useLocation } from '@/hooks/useLocation.js';
import MeteoAdvanced from '@/components/MeteoAdvanced/MeteoAdvanced.jsx';
import { useNavigation } from '@react-navigation/native';
import Container from '@/components/ui/Container/Container.jsx';

export default function HomeScreen() {
  const navigation = useNavigation();
  const coords = useLocation();
  const weather = useFetchWeather(coords);
  const city = useFetchCity(coords);
  const currentWeather = weather?.current_weather;

  const getSunTime = (type) => {
    const time = weather?.daily?.[type]?.[0]?.split('T')[1];
    return time || 'N/A';
  };

  const navigateToForecastScreen = () => {
    navigation.navigate('Forecast');
  };

  return currentWeather ? (
    <Container>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
          onPress={navigateToForecastScreen}
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
    </Container>
  ) : null;
}
