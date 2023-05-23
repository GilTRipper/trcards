import { Slot, Stack } from "expo-router";

export default () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Slot />
    </>
  );
};

