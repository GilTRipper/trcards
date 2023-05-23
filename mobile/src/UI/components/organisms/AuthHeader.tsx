import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { Icon, Row, Text } from "~/UI/components/atoms";

type AuthHeaderProps = {
  withMarginHorizontal?: boolean;
};
export const AuthHeader = ({ withMarginHorizontal }: AuthHeaderProps) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <Row
      justify="space-between"
      align="center"
      style={withMarginHorizontal ? styles.horizontalMargin : null}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleBackPress}
        style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
      >
        <Icon name="arrowBack" height={22} width={22} />
        <Text semiBold>Back</Text>
      </TouchableOpacity>
    </Row>
  );
};

const styles = StyleSheet.create({
  horizontalMargin: {
    marginHorizontal: 12,
  },
});
