import Container from '../../components/ui/Container/Container.jsx';

import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { s } from './ForecastScreen.style.js';
import ForecastHeader from "../../components/Forecast/ForecastHeader/ForecastHeader";

export default function ForecastScreen({}) {
  const { params } = useRoute();
  return (
    <Container>
        <ForecastHeader params={params} />
    </Container>
  );
}
