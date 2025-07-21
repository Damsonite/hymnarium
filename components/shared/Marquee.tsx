import { Marquee as RNMarquee } from '@animatereactnative/marquee';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: number;
  spacing?: number;
}

export default function Marquee({ text, className = '', speed = 0.5, spacing = 40 }: MarqueeProps) {
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [shouldUseMarquee, setShouldUseMarquee] = useState(false);

  // Update marquee state when dimensions change
  useEffect(() => {
    if (containerWidth > 0 && textWidth > 0) {
      setShouldUseMarquee(textWidth > containerWidth);
    }
  }, [textWidth, containerWidth]);

  return (
    <>
      {/* Hidden text for measuring - positioned off-screen */}
      <Text
        className={`absolute -top-96 ${className}`}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setTextWidth(width);
        }}>
        {text}
      </Text>

      {/* Visible text container */}
      <View
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setContainerWidth(width);
        }}>
        {shouldUseMarquee ? (
          <RNMarquee speed={speed} spacing={spacing}>
            <Text className={className}>{text}</Text>
          </RNMarquee>
        ) : (
          <Text className={className} numberOfLines={1}>
            {text}
          </Text>
        )}
      </View>
    </>
  );
}
