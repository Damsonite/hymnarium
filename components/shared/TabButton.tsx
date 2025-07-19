import { TabTriggerSlotProps } from 'expo-router/ui';
import { Ref, forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

export type TabButtonProps = TabTriggerSlotProps & {
  label: string;
};

export const TabButton = forwardRef(
  ({ label, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        className="flex-1 items-center gap-1 p-4"
        style={{
          opacity: isFocused ? 1 : 0.5,
        }}>
        <Text className="font-lxmedium text-primary text-xs">{label}</Text>
      </Pressable>
    );
  }
);
