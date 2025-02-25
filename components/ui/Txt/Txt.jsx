import { Text } from 'react-native';

import { s } from './Txt.style.js';

export default function Txt({ children, style }) {
  return <Text style={[s.text, style]}>{children}</Text>;
}
