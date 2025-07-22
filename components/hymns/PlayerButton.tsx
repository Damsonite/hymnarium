import { useColorScheme } from 'nativewind';
import { TouchableOpacity } from 'react-native';

import Icon, { IconName } from '~/components/shared/Icon';
import { colors } from '~/utils/color';

interface PlayerButtonProps {
  icon: IconName;
  onPress?: () => void;
  shaped?: boolean;
}

export default function PlayerButton({ icon, onPress, shaped = false }: PlayerButtonProps) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  return (
    <TouchableOpacity
      onPress={onPress}
      className="size-20 items-center justify-center rounded-full bg-text pl-1"
      style={{
        backgroundColor: shaped ? colors[mode].text : undefined,
      }}>
      <Icon name={icon} color={shaped ? 'background' : 'text'} />
    </TouchableOpacity>
  );
}
