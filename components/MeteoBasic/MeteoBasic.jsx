import { Image, View } from 'react-native';
import Txt from '@/components/ui/Txt/Txt';

import { s } from './MeteoBasic.style.js';
import Clock from '@/components/Clock/Clock.jsx';

export default function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>

      <Txt>{city}</Txt>

      <Txt style={s.weather_label}>{interpretation.label}</Txt>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°C</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
