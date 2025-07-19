import { TabTriggerSlotProps } from 'expo-router/ui';
import { Ref, forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Icon, IconName } from '~/components/shared/Icon';

export type TabButtonProps = TabTriggerSlotProps & {
  icon: IconName;
  label: string;
};

export const TabButton = forwardRef(
  ({ icon, label, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        className="flex-1 items-center gap-1 p-4"
        style={{
          opacity: isFocused ? 1 : 0.5,
        }}>
        <Icon name={icon} color="primary" size={22} />

        <Text className="font-lxmedium text-primary text-xs">{label}</Text>
      </Pressable>
    );
  }
);
