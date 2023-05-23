import { StyleSheet } from "react-native";
import { useAnimatedStyle, interpolate } from "react-native-reanimated";
import { Colors } from "~/UI/constants";

import type Animated from "react-native-reanimated";

export const createInputLabelStyle = (
  labelValue: Animated.SharedValue<number>
) =>
  useAnimatedStyle(
    () => ({
      transform: [
        { translateY: interpolate(labelValue.value, [0, 1], [0, -100]) },
      ],
    }),
    []
  );

export const createAnimatedInputStyle = (
  borderValue: Animated.SharedValue<number>
) =>
  useAnimatedStyle(
    () => ({
      borderWidth: interpolate(borderValue.value, [0, 1, 2], [0, 1, 3]),
    }),
    []
  );

export const styles = StyleSheet.create({
  inputContentWrapper: {
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
  },
  inputContainer: {
    height: 45,
    backgroundColor: Colors.black[200],
    borderRadius: 10,
    borderColor: Colors.accent[600],
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  text: {
    color: Colors.white[400],
    fontSize: 14,
    fontFamily: "Mona-Sans-Medium",
  },
  labelContainer: {
    position: "absolute",
    zIndex: 10,
    left: 15,
  },
  icon: {
    position: "absolute",
    zIndex: 10,
    right: 14,
  },
});
