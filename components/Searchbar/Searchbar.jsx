import { s } from './Searchbar.style.js';
import { TextInput } from 'react-native';

export default function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      style={s.input}
      placeholder="Chercher une ville..."
    />
  );
}
