import { Text, View } from 'react-native';

import { s } from './Home.style.js';

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={{ fontSize: 60, color: 'white' }}>Hello</Text>
      </View>
      <View style={s.searchbar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
}
