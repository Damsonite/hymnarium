import { Text } from 'react-native';

import { Container } from '~/components/shared/Container';

export default function Topics() {
  return (
    <Container>
      <Text className="title">Selecciona un tema</Text>
      <Text className="text-text">Lista de temas</Text>
    </Container>
  );
}
