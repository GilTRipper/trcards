import { Slot, Stack } from "expo-router";

const LoginLayout = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Slot />
    </>
  );
};

export default LoginLayout;
