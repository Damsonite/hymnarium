import { TopicList } from '~/components/library';
import { ListLayout } from '~/layouts';

export default function TopicsScreen() {
  return (
    <ListLayout title="Hymn Topics">
      <TopicList />
    </ListLayout>
  );
}
