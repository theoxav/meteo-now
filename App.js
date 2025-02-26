import { useFonts } from 'expo-font';
import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Home from './pages/Home/Home';
import backgroundImg from './assets/background.png';

import { s } from './App.style';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';

if (__DEV__) {
  require('./ReactotronConfig');
}

export default function App() {
  const [isFontLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
