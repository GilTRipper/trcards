import { Slot, Stack } from "expo-router";
import { AppLayout } from "~/UI/components/atoms";

export default () => (
  <AppLayout>
    <Stack.Screen options={{ headerShown: false }} />
    <Slot />
  </AppLayout>
);

