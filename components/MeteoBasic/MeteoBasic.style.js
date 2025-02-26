import { StyleSheet } from 'react-native';
import { Size } from '../../constants/Size';

export const s = StyleSheet.create({
  clock: {
    alignItems: 'flex-end',
  },
  weather_label: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
    fontSize: Size.M,
  },
  image: {
    height: Size.XL,
    width: Size.XL,
  },
  temperature_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temperature: {
    fontSize: Size.XXL,
  },
});
