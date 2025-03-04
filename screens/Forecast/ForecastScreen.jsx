import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Container from '@/components/ui/Container/Container.jsx';
import ForecastHeader from '@/components/Forecast/ForecastHeader/ForecastHeader';
import ForecastList from '@/components/Forecast/ForecastList/ForecastList';

import { s } from './ForecastScreen.style.js';

export default function ForecastScreen({}) {
  const { params } = useRoute();

  return (
    <Container>
      <ForecastHeader params={params} />
      <View style={{ marginTop: 50 }}>
        <ForecastList items={params} />
      </View>
    </Container>
  );
}
