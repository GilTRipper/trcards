import React from "react";
import { View, TextInput as BaseTextInput } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

import { Icon } from "../Icon";
import { Colors } from "~/UI/constants";
import {
  styles,
  createAnimatedInputStyle,
  createInputLabelStyle,
} from "./styles";

import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { TextInputProps } from "./types";
import { Text } from "../Text";

const AnimatedInput = Animated.createAnimatedComponent(BaseTextInput);

export const TextInput = ({
  style,
  inputRef,
  numberOfLines = 1,
  multiline = false,
  allowFontScaling = false,
  blurOnSubmit = true,
  placeholder,
  onFocus,
  onBlur,
  onIconPress,
  iconName,
  ...props
}: TextInputProps) => {
  const borderValue = useSharedValue(0);
  const labelValue = useSharedValue(0);

  const animatedStyle = createAnimatedInputStyle(borderValue);
  const labelStyle = createInputLabelStyle(labelValue);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    labelValue.value = withTiming(1, { duration: 400 });
    borderValue.value = withTiming(2, { duration: 300 });

    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (props.value) {
      borderValue.value = withTiming(1, { duration: 300 });
    } else {
      borderValue.value = withTiming(0, { duration: 300 });
      labelValue.value = withTiming(0, { duration: 400 });
    }
    onBlur?.(e);
  };

  return (
    <View style={styles.inputContentWrapper}>
      <Animated.View
        pointerEvents="none"
        style={[styles.labelContainer, labelStyle]}
      >
        <Text medium style={styles.text}>
          {placeholder}
        </Text>
      </Animated.View>
      <AnimatedInput
        ref={inputRef}
        cursorColor={Colors.white[100]}
        selectionColor={Colors.white[100]}
        numberOfLines={numberOfLines}
        allowFontScaling={allowFontScaling}
        multiline={multiline}
        blurOnSubmit={blurOnSubmit}
        style={[styles.inputContainer, styles.text, animatedStyle, style]}
        placeholderTextColor={Colors.white[400]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {iconName ? (
        <Icon
          name={iconName}
          height={22}
          width={22}
          color={Colors.accent[600]}
          style={styles.icon}
          onPress={onIconPress}
        />
      ) : null}
    </View>
  );
};
