import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="bg-background flex flex-1 p-6 pb-0">{children}</SafeAreaView>;
};
