import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '~/components/shared/Icon';

interface ListHeaderProps {
  title: string;
  showListControls?: boolean;
  isAscending?: boolean;
  setIsAscending?: (isAscending: boolean) => void;
}

export default function ListHeader({
  title,
  showListControls = true,
  isAscending = true,
  setIsAscending,
}: ListHeaderProps) {
  return (
    <View className="border-secondary flex-row items-center justify-between border-b pb-2">
      <Text className="title">{title}</Text>

      {showListControls && setIsAscending && (
        <TouchableOpacity
          className="flex-row items-center gap-2"
          onPress={() => setIsAscending(!isAscending)}>
          <Text className="font-lxmedium text-primary">{isAscending ? 'A - Z' : 'Z - A'}</Text>

          <Icon
            name={isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc'}
            size={16}
            color="primary"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
