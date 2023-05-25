import { Screen } from "~/UI/components/atoms";
import { AuthHeader, LoginForm } from "~/UI/components/organisms";

export const LoginScreen = () => {
  return (
    <Screen insetsTop insetsBottom withHorizontalPadding>
      <AuthHeader />
      <LoginForm />
    </Screen>
  );
};
