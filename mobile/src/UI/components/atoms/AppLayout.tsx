import { View, StyleSheet } from "react-native";
import type { ViewProps } from "react-native";
import { Colors } from "~/UI/constants";

export const AppLayout = ({ ...props }: ViewProps) => {
  return <View style={styles.layout} {...props} />;
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.background_gradient[100],
  },
});
