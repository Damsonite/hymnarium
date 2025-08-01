import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '~/components/shared/Icon';

interface MultiSelectProps {
  currentOption?: { value: string; label: string };
  options: { value: string; label: string }[];
  handleOptionSelect: (value: string) => void;
}

export default function MultiSelect({
  currentOption,
  options,
  handleOptionSelect,
}: MultiSelectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-2 rounded-lg border border-primary px-3 py-2"
        onPress={() => setIsExpanded(!isExpanded)}>
        <Text className="font-lxmedium text-primary">{currentOption?.label}</Text>

        <Icon name={isExpanded ? 'caret-up' : 'caret-down'} size={16} color="primary" />
      </TouchableOpacity>

      {isExpanded && (
        <View className="absolute right-0 top-12 z-10 rounded-lg border border-secondary bg-background shadow-lg">
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              className={`border-b border-secondary px-3 py-3 ${
                option.value === currentOption?.value ? 'bg-primary/10' : ''
              }`}
              onPress={() => handleOptionSelect(option.value)}>
              <Text
                className={`font-lxmedium ${
                  option.value === currentOption?.value ? 'text-primary' : 'text-text'
                }`}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}
