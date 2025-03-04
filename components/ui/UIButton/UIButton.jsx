import { TouchableOpacity } from 'react-native';
import Txt from '@/components/ui/Txt/Txt';

export default function UIButton({ children, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      <Txt>{children}</Txt>
    </TouchableOpacity>
  );
}
