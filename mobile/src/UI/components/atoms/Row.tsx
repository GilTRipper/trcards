import { View } from "react-native";

import type { ViewProps } from "react-native";

type RowProps = {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
} & ViewProps;

export const Row = ({ justify, align, style, ...props }: RowProps) => {
  return (
    <View
      style={[
        { flexDirection: "row" },
        justify ? { justifyContent: justify } : null,
        align ? { alignItems: align } : null,
        style,
      ]}
      {...props}
    />
  );
};
