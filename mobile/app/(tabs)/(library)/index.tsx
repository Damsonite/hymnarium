import { useState } from 'react';

import { HymnList } from '~/components/hymns';
import { ListLayout } from '~/layouts';

export default function HymnScreen() {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <ListLayout title="All hymns" isAscending={isAscending} setIsAscending={setIsAscending}>
      <HymnList isAscending={isAscending} />
    </ListLayout>
  );
}
