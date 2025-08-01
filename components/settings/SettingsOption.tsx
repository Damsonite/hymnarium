import { Text, View } from 'react-native';

interface SettingsOptionProps {
  label: string;
  children: React.ReactNode;
}

export default function SettingsOption({ label, children }: SettingsOptionProps) {
  return (
    <View className="py-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-lxmedium text-text">{label}</Text>
        {children}
      </View>
    </View>
  );
}
