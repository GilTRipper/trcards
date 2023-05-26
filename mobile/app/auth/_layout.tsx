import { Stack } from "expo-router";
import { AppLayout } from "~/UI/components/atoms";

export default () => (
  <AppLayout>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen
        name="reset-password"
        options={{ animation: "slide_from_bottom" }}
      />
    </Stack>
  </AppLayout>
);
