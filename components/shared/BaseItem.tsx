import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';

import BoxArt from '~/components/shared/BoxArt';
import Icon, { IconName } from '~/components/shared/Icon';
import { Color, colors } from '~/utils/color';

export type Tag = {
  label: string;
  color: Color;
};

interface BaseItemProps {
  iconName: IconName;
  title: string;
  subtitle?: string;
  isFavorite?: boolean;
  showFavorite?: boolean;
  tags?: Tag[];
  onPress?: () => void;
}

export default function BaseItem({
  iconName,
  title,
  subtitle,
  isFavorite = false,
  showFavorite = true,
  tags = [],
  onPress,
}: BaseItemProps) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <TouchableOpacity className="mb-2 h-20 w-full flex-row" onPress={onPress}>
      <BoxArt iconName={iconName} />

      {/* Content */}
      <View className="flex-1 justify-center gap-2 px-2">
        {/* Title and Favorite Icon */}
        <View className="flex-row items-center justify-between">
          <Text className="font-lxmedium text-text mr-2 flex-1" numberOfLines={1}>
            {title}
          </Text>

          {showFavorite && (
            <Icon name={isFavorite ? 'heart' : 'heart-o'} size={16} color="primary" />
          )}
        </View>

        {/* Subtitle and Tags */}
        <View className="flex-row items-center justify-between">
          <Text className="font-lxmedium text-primary flex-1 text-sm" numberOfLines={1}>
            {subtitle ? subtitle : ' '}
          </Text>

          <View className="flex-row gap-1">
            {tags.map((tag, index) => (
              <View
                key={index}
                className="justify-center rounded-md px-[4px] py-[2px]"
                style={{
                  backgroundColor: colors[mode][tag.color],
                }}>
                <Text className="font-lxmedium text-background text-xs">{tag.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
