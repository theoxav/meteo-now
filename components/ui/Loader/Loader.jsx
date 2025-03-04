import { View, ActivityIndicator } from 'react-native';

import Txt from '@/components/ui/Txt/Txt';

import { s } from './Loader.style.js';

export default function Loader({ message = 'Chargement...' }) {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" />
      <Txt style={s.message}>{message}</Txt>
    </View>
  );
}
