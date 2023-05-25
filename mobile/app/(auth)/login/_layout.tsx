import { Slot, Stack } from "expo-router";
import { AppLayout } from "~/UI/components/atoms";

export default () => {
  return (
    <AppLayout>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Slot />
    </AppLayout>
  );
};

