import { View } from 'react-native';
import SectionHeader from '~/components/shared/SectionHeader';
import TopicList from '~/components/topics/TopicList';

export default function TopicsScreen() {
  return (
    <View className="container">
      <SectionHeader title="Hymns by topic" />

      <TopicList />
    </View>
  );
}
