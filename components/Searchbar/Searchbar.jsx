import { TextInput } from 'react-native';

import { s } from './Searchbar.style.js';

export default function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      style={s.input}
      placeholder="Chercher une ville..."
    />
  );
}
