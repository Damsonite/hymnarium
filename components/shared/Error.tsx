import { Text, View } from 'react-native';

interface ErrorProps {
  title?: string;
  message?: string | null;
}

export default function Error({ title = 'There was an error', message }: ErrorProps) {
  return (
    <View className="flex-1 items-center justify-center gap-1">
      <Text className="text-danger font-lxmedium">{title}</Text>
      <Text className="text-danger font-lxregular">{message}</Text>
    </View>
  );
}
