import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

import { Color, colors } from '~/utils/color';

interface IconProps {
  name: string;
  size?: number;
  color?: Color | string;
}

const Icon = ({ name, size = 24, color = 'text' }: IconProps) => {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme ?? 'light';

  const finalColor =
    typeof color === 'string' && color in colors[mode] ? colors[mode][color as Color] : color;

  const isFontAwesome = ['heart', 'heart-o'].includes(name);

  if (isFontAwesome) {
    return <FontAwesome name={name as any} size={size} color={finalColor} />;
  }

  const isFontAwesome5 = ['search', 'cog'].includes(name);

  if (isFontAwesome5) {
    return <FontAwesome5 name={name} size={size} color={finalColor} />;
  }

  return <FontAwesome6 name={name} size={size} color={finalColor} />;
};

export default Icon;
