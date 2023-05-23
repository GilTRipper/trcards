import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Canvas,
  Group,
  Rect,
  RadialGradient,
  vec,
} from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";

import { Colors, Layout } from "~/UI/constants";

import type { StyleProp, ViewStyle } from "react-native";
import type { StatusBarStyle } from "expo-status-bar";

type ScreenProps = {
  insetsTop?: boolean;
  insetsBottom?: boolean;
  withHorizontalPadding?: boolean;
  statusBarStyle?: StatusBarStyle;
  statusBarTranslucent?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const WIDTH = Layout.width;
const HEIGHT = Layout.height;

export const Screen = ({
  children,
  statusBarStyle = "light",
  statusBarTranslucent,
  insetsBottom,
  insetsTop,
  withHorizontalPadding,
  style,
}: ScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style={statusBarStyle} translucent={statusBarTranslucent} />
      <Canvas style={styles.screenGradient}>
        <Group>
          <Rect x={0} y={0} height={HEIGHT} width={WIDTH} style={"fill"}>
            <RadialGradient
              c={vec(WIDTH / 2, HEIGHT / 2)}
              r={250}
              colors={[
                Colors.background_gradient[0],
                Colors.background_gradient[100],
              ]}
            ></RadialGradient>
          </Rect>
        </Group>
      </Canvas>
      <View
        style={[
          styles.screenContainer,
          insetsBottom ? { paddingBottom: insets.bottom } : null,
          insetsTop ? { paddingTop: Math.max(insets.top, 40) } : null,
          withHorizontalPadding ? { paddingHorizontal: 12 } : null,
          style,
        ]}
      >
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  screenContainer: {
    flex: 1,
  },
});
