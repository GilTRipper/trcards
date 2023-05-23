import { StyleSheet } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";

import type { SharedValue } from "react-native-reanimated";

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  buttonContentContainer: {
    height: 49,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const createAnimatedButtonStyle = (buttonValue: SharedValue<number>) =>
  useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(buttonValue.value, [0, 1], [1, 0.94]),
      },
    ],
  }));
