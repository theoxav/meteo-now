import { View } from 'react-native';

import Txt from '@/components/ui/Txt/Txt';

import { s } from './MeteoAdvanced.style.js';

export default function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <View style={s.section}>
        <Txt style={s.labelText}>{dusk}</Txt>
        <Txt style={s.valueText}>Aube</Txt>
      </View>
      <View style={s.section}>
        <Txt style={s.labelText}>{dawn}</Txt>
        <Txt style={s.valueText}>Crépuscule</Txt>
      </View>
      <View style={s.section}>
        <Txt style={s.labelText}>{wind} km/h</Txt>
        <Txt style={s.valueText}>Vent</Txt>
      </View>
    </View>
  );
}
