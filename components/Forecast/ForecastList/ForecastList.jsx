import { View } from 'react-native';

import { dateToDDMM } from '@/utils/date';
import { DAYS } from '@/utils/date';
import { getWeatherInterpretation } from '@/utils/meteo';

import ForecastListItem from '../ForecastListItem/ForecastListItem';

export default function ForecastList({ items }) {
  return (
    <View>
      {items.time.map((item, index) => {
        const code = items.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(item);
        const day = DAYS[date.getDay()];
        const temperature = items.temperature_2m_max[index];

        return (
          <ForecastListItem
            key={index}
            image={image}
            day={day}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
}
