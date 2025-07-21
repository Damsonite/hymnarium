import { useState } from 'react';
import HymnList from '~/components/hymns/HymnList';

import { Container } from '~/components/shared/Container';
import ListHeader from '~/components/shared/ListHeader';

export default function Hymns() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <Container>
      <ListHeader title="Select a hymn" isAscending={isAscending} setIsAscending={setIsAscending} />

      <HymnList isAscending={isAscending} />
    </Container>
  );
}
