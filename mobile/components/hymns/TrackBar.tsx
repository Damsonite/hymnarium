import Slider from '@react-native-community/slider';
import { Text, useColorScheme, View } from 'react-native';

import { colors } from '~/styles';
import { formatTime } from '~/utils';

interface TrackBarProps {
  currentTime: number;
  duration: number;
  onSlidingComplete: (value: number) => void;
  isLoading?: boolean;
}

export default function TrackBar({
  currentTime,
  duration,
  onSlidingComplete,
  isLoading = false,
}: TrackBarProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <View className="mx-6 mb-2 mt-4" style={{ opacity: isLoading ? 0.6 : 1 }}>
      <Slider
        thumbTintColor={colors.primary[theme]}
        minimumTrackTintColor={colors.primary[theme]}
        maximumTrackTintColor={colors.text[theme]}
        value={isLoading ? 0 : currentTime}
        maximumValue={isLoading ? 100 : duration}
        step={0.01}
        onSlidingComplete={isLoading ? undefined : onSlidingComplete}
        disabled={isLoading}
      />

      <View className="mx-2 mt-1 flex flex-row justify-between">
        <Text className="text-xs text-text opacity-80">
          {isLoading ? '--:--' : formatTime(currentTime)}
        </Text>
        <Text className="text-xs text-text opacity-80">
          {isLoading ? '--:--' : formatTime(duration)}
        </Text>
      </View>
    </View>
  );
}
