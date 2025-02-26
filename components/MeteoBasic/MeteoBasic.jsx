import { Image, TouchableOpacity, View } from 'react-native';
import Txt from '@/components/ui/Txt/Txt';

import { s } from './MeteoBasic.style.js';
import Clock from '@/components/Clock/Clock.jsx';

export default function MeteoBasic({
  onPress,
  temperature,
  city,
  interpretation,
}) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>

      <Txt>{city}</Txt>

      <Txt style={s.weather_label}>{interpretation.label}</Txt>

      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={s.temperature}>{temperature}°C</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
