import { Screen } from "../../atoms";
import { AuthHeader } from "../../organisms";

export const LoginScreen = () => {
  return (
    <Screen insetsTop insetsBottom withHorizontalPadding>
      <AuthHeader />
    </Screen>
  );
};
