import { View } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const AppLayout = () => {
  const [fontsLoaded] = useFonts({
    "Mona-Sans-Regular": require("assets/fonts/MonaSans/Mona-Sans-Regular.ttf"),
    "Mona-Sans-Medium": require("assets/fonts/MonaSans/Mona-Sans-Medium.ttf"),
    "Mona-Sans-SemiBold": require("assets/fonts/MonaSans/Mona-Sans-SemiBold.ttf"),
    "Mona-Sans-Bold": require("assets/fonts/MonaSans/Mona-Sans-Bold.ttf"),
    "Mona-Sans-ExtraBold": require("assets/fonts/MonaSans/Mona-Sans-ExtraBold.ttf"),
  });

  const onRootLayoutView = async () => {};

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onRootLayoutView}>
      <Stack />
    </View>
  );
};

export default AppLayout;
