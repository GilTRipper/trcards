import React from "react";
import { Pressable } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "~/UI/constants";
import { Text } from "../Text";
import { createAnimatedButtonStyle, styles } from "./styles";

import type { PressableProps, GestureResponderEvent } from "react-native";

type BaseButtonProps = { children?: string } & PressableProps;

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

export const BaseButton = ({
  children,
  onPressIn,
  onPressOut,
  style,
  ...props
}: BaseButtonProps) => {
  const buttonValue = useSharedValue(0);
  const buttonStyle = createAnimatedButtonStyle(buttonValue);

  const handlePressIn = (e: GestureResponderEvent) => {
    buttonValue.value = withTiming(1, { duration: 220 });
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    buttonValue.value = withTiming(0, { duration: 220 });
    onPressIn?.(e);
  };

  return (
    <AnimatedButton
      style={[styles.buttonContainer, buttonStyle, style]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...props}
    >
      <LinearGradient
        style={styles.buttonContentContainer}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.75]}
        colors={[Colors.button_gradient[0], Colors.button_gradient[100]]}
      >
        <Text semiBold>{children}</Text>
      </LinearGradient>
    </AnimatedButton>
  );
};
