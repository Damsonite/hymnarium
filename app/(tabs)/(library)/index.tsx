import { Text } from 'react-native';

import { Container } from '~/components/shared/Container';

export default function Hymns() {
  return (
    <Container>
      <Text className="title">Selecciona un himno</Text>
      <Text className="text-text">Lista de himnos</Text>
    </Container>
  );
}
