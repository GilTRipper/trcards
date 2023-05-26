import { View } from "react-native";
import { Screen } from "~/UI/components/atoms";
import { AuthHeader, ResetPasswordForm } from "~/UI/components/organisms";

export const ResetPasswordScreen = () => (
  <Screen insetsTop insetsBottom withHorizontalPadding>
    <AuthHeader />
    <ResetPasswordForm />
  </Screen>
);
