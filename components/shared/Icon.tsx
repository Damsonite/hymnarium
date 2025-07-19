import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

import { Color, colors } from '~/utils/color';

export type IconName = keyof typeof FontAwesome5.glyphMap | keyof typeof FontAwesome.glyphMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: Color | string;
}

const Icon = ({ name, size = 24, color = 'text' }: IconProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const finalColor =
    typeof color === 'string' && color in colors[isDark ? 'dark' : 'light']
      ? colors[isDark ? 'dark' : 'light'][color as Color]
      : color;

  // Check if icon exists in FontAwesome5 first, fallback to FontAwesome
  const iconName = name as string;

  // Special handling for heart icons - always use FontAwesome
  if (iconName === 'heart' || iconName === 'heart-o') {
    return (
      <FontAwesome
        name={name as keyof typeof FontAwesome.glyphMap}
        size={size}
        color={finalColor}
      />
    );
  }

  // Get the raw glyph map
  const fa5RawMap = FontAwesome5.getRawGlyphMap && FontAwesome5.getRawGlyphMap();

  // Check if icon exists in the raw map
  const fa5HasIconInRaw = fa5RawMap && iconName in fa5RawMap;
  const faHasIcon = FontAwesome.glyphMap && iconName in FontAwesome.glyphMap;

  // Try raw map first, then hasIcon, then fallback
  if (fa5HasIconInRaw) {
    return (
      <FontAwesome5
        name={name as keyof typeof FontAwesome5.glyphMap}
        size={size}
        color={finalColor}
      />
    );
  }

  if (faHasIcon) {
    return (
      <FontAwesome
        name={name as keyof typeof FontAwesome.glyphMap}
        size={size}
        color={finalColor}
      />
    );
  }

  return <FontAwesome name="question" size={size} color={finalColor} />;
};

export default Icon;
