import { useColorScheme } from 'nativewind';
import { View } from 'react-native';
import { themes } from '~/utils/color';

const Theme = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      className="flex-1 bg-background"
      style={themes[colorScheme === 'dark' ? 'dark' : 'light']}>
      {children}
    </View>
  );
};

export default Theme;
