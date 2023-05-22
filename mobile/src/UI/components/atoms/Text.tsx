import React from "react";
import { StyleSheet, Text as BaseText } from "react-native";
import type { TextProps as BaseTextProps } from "react-native";
import { Colors } from "../../constants";

type TextProps = {
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  children?: React.ReactNode;
} & BaseTextProps;

export const Text = ({
  regular,
  medium = true,
  semiBold,
  bold,
  extraBold,
  children,
  style,
  ...props
}: TextProps) => {
  return (
    <BaseText
      style={[
        styles.text,
        regular ? styles.regular : null,
        medium ? styles.medium : null,
        semiBold ? styles.semiBold : null,
        bold ? styles.bold : null,
        extraBold ? styles.extraBold : null,
        style,
      ]}
      {...props}
    >
      {children}
    </BaseText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 16.8,
    color: Colors.white[100],
  },
  regular: {
    fontFamily: "Mona-Sans-Regular",
  },
  medium: {
    fontFamily: "Mona-Sans-Medium",
  },
  semiBold: {
    fontFamily: "Mona-Sans-SemiBold",
  },
  bold: {
    fontFamily: "Mona-Sans-Bold",
  },
  extraBold: {
    fontFamily: "Mona-Sans-ExtraBold",
  },
});
