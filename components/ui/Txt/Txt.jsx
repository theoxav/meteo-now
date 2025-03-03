import { Text, useWindowDimensions } from 'react-native';

import { s } from './Txt.style.js';

export default function Txt({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  return (
    <Text style={[s.text, style, { fontSize: fontSize * 0.00118 * height }]}>
      {children}
    </Text>
  );
}
