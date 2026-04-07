import FontAwesome6 from '@expo/vector-icons/build/FontAwesome6';
import { useColorScheme, View } from 'react-native';

import { colors, withOpacity } from '~/styles';

export const BoxArt = () => {
  const theme = useColorScheme() ?? 'light';

  return (
    <View
      style={{
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: withOpacity(colors.muted[theme], 0.2),
        backgroundColor: withOpacity(colors.secondary[theme], 0.2),
      }}>
      <FontAwesome6 name="music" size={32} color={colors.text[theme]} />
    </View>
  );
};
