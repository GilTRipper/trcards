import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Row, Text } from "../atoms";
import { center } from "@shopify/react-native-skia";
import { useRouter } from "expo-router";

export const AuthHeader = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <Row justify="space-between" align="center">
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

const styles = StyleSheet.create({});
