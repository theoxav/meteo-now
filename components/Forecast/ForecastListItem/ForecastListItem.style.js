import { StyleSheet } from 'react-native';
import {Size} from "../../../constants/Size";

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: Size.M,
  },
  image: {
    height: 50,
    width: 50,
  },
    day: {
        fontSize: Size.M,
    },
    date: {
        fontSize: Size.M,
    },
    temperature: {
        fontSize: Size.M,
        textAlign: 'right',
    },
});
