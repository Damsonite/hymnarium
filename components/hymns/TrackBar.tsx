import Slider from '@react-native-community/slider';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { colors } from '~/utils/color';
import { formatTime } from '~/utils/time';

interface TrackBarProps {
  currentTime: number;
  duration: number;
  handleSlidingComplete: (value: number) => void;
  disabled?: boolean;
}

export default function TrackBar({
  currentTime,
  duration,
  handleSlidingComplete,
  disabled = false,
}: TrackBarProps) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <View className="mx-6 mt-4" style={{ opacity: disabled ? 0.5 : 1 }}>
      <Slider
        thumbTintColor={colors[mode].primary}
        minimumTrackTintColor={colors[mode].primary}
        maximumTrackTintColor={colors[mode].text}
        value={currentTime}
        maximumValue={duration}
        step={0.01}
        onSlidingComplete={handleSlidingComplete}
        disabled={disabled}
      />

      <View className="mx-2 mt-1 flex flex-row justify-between">
        <Text className="text-xs text-text opacity-80">{formatTime(currentTime)}</Text>
        <Text className="text-xs text-text opacity-80">{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
