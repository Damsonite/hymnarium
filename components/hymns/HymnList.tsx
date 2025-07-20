import HymnItem from '~/components/hymns/HymnItem';
import BaseList from '~/components/shared/BaseList';
import * as mockData from '~/db/mockData';

export default function HymnList() {
  const data = mockData.hymns;

  return (
    <BaseList
      data={data}
      renderItem={({ item }) => <HymnItem item={item} />}
      emptyMessage="No hay himnos disponibles"
    />
  );
}
