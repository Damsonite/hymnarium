import { useState } from 'react';
import { Text } from 'react-native';

import { Container } from '~/components/shared/Container';
import ListHeader from '~/components/shared/ListHeader';

export default function Hymns() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <Container>
      <ListHeader
        title="Selecciona un himno"
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />

      <Text className="text-text">Lista de himnos</Text>
    </Container>
  );
}
