import { Marquee as RNMarquee } from '@animatereactnative/marquee';
import { useEffect, useState } from 'react';
import { Text, TextStyle, View } from 'react-native';

interface MarqueeProps {
  text: string;
  speed?: number;
  spacing?: number;
  style: TextStyle;
}

export const Marquee = ({ text, speed = 0.5, spacing = 40, style }: MarqueeProps) => {
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [shouldUseMarquee, setShouldUseMarquee] = useState(false);

  useEffect(() => {
    if (containerWidth > 0 && textWidth > 0) {
      const needsMarquee = textWidth >= containerWidth - 10;
      setShouldUseMarquee(needsMarquee);
    }
  }, [textWidth, containerWidth, text]);

  return (
    <>
      {/* Hidden text for measuring - positioned off-screen */}
      <Text
        style={{
          position: 'absolute',
          opacity: 0,
          left: -9999,
          top: -9999,
          ...style,
        }}
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
        {shouldUseMarquee && textWidth > 0 ? (
          <RNMarquee speed={speed} spacing={spacing}>
            <Text style={style}>{text}</Text>
          </RNMarquee>
        ) : (
          <Text style={style} numberOfLines={1}>
            {text}
          </Text>
        )}
      </View>
    </>
  );
};
