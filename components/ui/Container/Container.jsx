import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import backgroundImg from '@/assets/background.png';

import { s } from './Container.style.js';

export default function Container({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
