import { StyleSheet } from 'react-native';
import { Radius } from '@/constants/Radius';
import { Size } from '../../constants/Size';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: Radius.M,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#0000005c',
  },
  section: {
    alignItems: 'center',
  },
  labelText: {
    fontSize: Size.M,
  },
  valueText: {
    fontSize: Size.S,
  },
});
