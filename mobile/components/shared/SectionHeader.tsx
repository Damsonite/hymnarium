import { useRouter } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from '~/components/shared/Icon';

interface ListHeaderProps {
  title: string | string[];
  isAscending?: boolean;
  setIsAscending?: (isAscending: boolean) => void;
  largeTitle?: boolean;
  showBackButton?: boolean;
}

export default function SectionHeader({
  title,
  isAscending = true,
  setIsAscending,
  largeTitle = false,
  showBackButton = false,
}: ListHeaderProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (showBackButton) {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center justify-between border-b border-secondary pb-4">
      <Pressable className="flex-row items-center gap-6" onPress={handleBackPress}>
        {showBackButton && <Icon name="arrow-left" size={16} color="text" />}

        <Text className="font-lxmedium text-text" style={{ fontSize: largeTitle ? 20 : 16 }}>
          {title}
        </Text>
      </Pressable>

      {setIsAscending && (
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
