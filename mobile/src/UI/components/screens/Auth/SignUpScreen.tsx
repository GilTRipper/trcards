import { Screen } from "../../atoms";
import { AuthHeader } from "../../organisms";

export const SignUpScreen = () => {
  return (
    <Screen insetsBottom insetsTop withHorizontalPadding>
      <AuthHeader />
    </Screen>
  );
};
