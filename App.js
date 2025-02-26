import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AlataRegular from './assets/fonts/Alata-Regular.ttf';

import ForecastScreen from './screens/Forecast/ForecastScreen';
import HomeScreen from './screens/Home/HomeScreen';

if (__DEV__) {
  require('./ReactotronConfig');
}

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Forecast" component={ForecastScreen} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
