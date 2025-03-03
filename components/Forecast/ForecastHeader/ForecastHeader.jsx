import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UIButton from '@/components/ui/UIButton/UIButton';
import Txt from '@/components//ui/Txt/Txt';

import { s } from './ForecastHeader.style.js';

export default function ForecastHeader({ params }) {
  const  navigation  = useNavigation();
  return (
    <View style={s.header}>
      <UIButton style={s.back_button} onPress={() => navigation.goBack()}>
        <Txt>{'<'}</Txt>
      </UIButton>
      <View style={s.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
}
