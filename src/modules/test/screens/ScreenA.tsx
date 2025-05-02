import React from 'react';
import {Button, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export interface ScreenAProps {}

export const ScreenA: React.FC<ScreenAProps> = props => {
  const width = useSharedValue(100);
  const handlePress = () => {
    console.log('pressed button');
    width.value = withSpring(width.value + 50);
  };

  return (
    <View>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};
