import { useState } from 'react';

import { VideoList } from '~/components/library';
import { ListLayout } from '~/layouts';

export default function VideosScreen() {
  const [isAscending, setIsAscending] = useState(false);

  return (
    <ListLayout title="All videos" isAscending={isAscending} setIsAscending={setIsAscending}>
      <VideoList isAscending={isAscending} />
    </ListLayout>
  );
}
