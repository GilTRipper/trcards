import { Slot, Stack } from "expo-router";

export default () => (
  <>
    <Slot />
    <Stack.Screen options={{ headerShown: false }} />
  </>
);
