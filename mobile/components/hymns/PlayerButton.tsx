import { useColorScheme } from 'nativewind';
import { TouchableOpacity } from 'react-native';

import Icon from '~/components/shared/Icon';
import { colors } from '~/utils/color';

interface PlayerButtonProps {
  icon: string;
  onPress?: () => void;
  shaped?: boolean;
  active?: boolean;
}

export default function PlayerButton({
  icon,
  onPress,
  shaped = false,
  active = true,
}: PlayerButtonProps) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <TouchableOpacity
      onPress={onPress}
      className="size-20 items-center justify-center rounded-full bg-text pl-1"
      style={{
        backgroundColor: shaped ? colors[mode].text : undefined,
        opacity: active ? 1 : 0.4,
      }}>
      <Icon name={icon} color={shaped ? 'background' : 'text'} />
    </TouchableOpacity>
  );
}
