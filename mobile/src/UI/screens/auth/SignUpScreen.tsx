import { Screen } from "../../components/atoms";
import { AuthHeader, SignUpForm } from "../../components/organisms";

export const SignUpScreen = () => {
  return (
    <Screen insetsBottom insetsTop withHorizontalPadding>
      <AuthHeader />
      <SignUpForm />
    </Screen>
  );
};
