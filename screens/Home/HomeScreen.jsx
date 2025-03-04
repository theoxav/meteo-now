import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFetchWeather } from '@/hooks/useFetchWeather.js';
import { useFetchCity } from '@/hooks/useFetchCity.js';
import { useLocation } from '@/hooks/useLocation.js';
import { useFetchCoordsByCity } from '@/hooks/useFetchCoordsByCity.js';

import Container from '@/components/ui/Container/Container.jsx';
import MeteoAdvanced from '@/components/MeteoAdvanced/MeteoAdvanced.jsx';
import MeteoBasic from '@/components/MeteoBasic/MeteoBasic.jsx';
import Searchbar from '@/components/Searchbar/Searchbar';

import { s } from './HomeScreen.style.js';
import { useEffect, useState } from 'react';
import { getWeatherInterpretation } from '@/utils/meteo.js';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchCity, setSearchCity] = useState('');
  const [selectedCoords, setSelectedCoords] = useState(null);

  const currentCoords = useLocation();
  const coords = selectedCoords || currentCoords;
  const weather = useFetchWeather(coords);
  const city = useFetchCity(coords);
  const currentWeather = weather?.current_weather;

  const { coords: fetchedCoords, error } = useFetchCoordsByCity(searchCity);

  useEffect(() => {
    if (fetchedCoords) {
      setSelectedCoords(fetchedCoords);
    }
  }, [fetchedCoords]);

  const handleSearchSubmit = (event) => {
    setSearchCity(event.nativeEvent.text);
  };

  const getSunTime = (type) => {
    const time = weather?.daily?.[type]?.[0]?.split('T')[1];
    return time || 'N/A';
  };

  const navigateToForecastScreen = () => {
    navigation.navigate('Forecast', { city, ...weather.daily });
  };

  return (
    <Container>
      <View style={s.meteo_basic}>
        {error ? (
          <Text>{error}</Text>
        ) : currentWeather ? (
          <MeteoBasic
            temperature={Math.round(currentWeather?.temperature)}
            city={city}
            interpretation={getWeatherInterpretation(
              currentWeather?.weathercode
            )}
            onPress={navigateToForecastScreen}
          />
        ) : (
          <Text>Loading weather...</Text>
        )}
      </View>
      <View style={s.searchbar}>
        <Searchbar onSubmit={handleSearchSubmit} />
      </View>
      <View style={s.meteo_advanced}>
        {currentWeather ? (
          <MeteoAdvanced
            wind={currentWeather?.windspeed}
            dusk={getSunTime('sunset')}
            dawn={getSunTime('sunrise')}
          />
        ) : (
          <Text>Loading advanced weather...</Text>
        )}
      </View>
    </Container>
  );
}
