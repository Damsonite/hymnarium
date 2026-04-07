import { Pressable, useColorScheme } from 'react-native';

import { colors } from '~/styles';

interface PlayerButtonProps {
  onPress?: () => void;
  icon: React.ReactElement;
  shaped?: boolean;
  active?: boolean;
}

export default function PlayerButton({
  onPress,
  icon,
  shaped = false,
  active = true,
}: PlayerButtonProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <Pressable
      onPress={onPress}
      className="size-20 items-center justify-center rounded-full bg-text pl-1"
      style={{
        backgroundColor: shaped ? colors.text[theme] : undefined,
        opacity: active ? 1 : 0.4,
      }}>
      {icon}
    </Pressable>
  );
}
