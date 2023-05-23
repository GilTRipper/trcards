import { StyleSheet, View } from "react-native";
import { BaseButton, PasswordInput, Text, TextInput } from "../../atoms";
import { useRouter } from "expo-router";

export const LoginForm = () => {
  const router = useRouter();

  const goSignUp = () => {
    router.push("(auth)/sign-up");
  };

  const goResetPassword = () => {
    router.push("(auth)/reset-password");
  };

  return (
    <View style={styles.formWrapper}>
      <Text medium style={styles.formTitle}>
        Log In with Email
      </Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <PasswordInput placeholder="Password" />
      <BaseButton>Log in</BaseButton>
      <Text style={[styles.centerText, styles.mt6]}>
        Forgot your password?{"  "}
        <Text semiBold onPress={goResetPassword}>
          Reset here
        </Text>
      </Text>
      <Text style={[styles.bottomText, styles.centerText]}>
        Don’t have an account?{"  "}
        <Text semiBold onPress={goSignUp}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    marginTop: 65,
    gap: 16,
  },
  formTitle: {
    fontSize: 24,
    lineHeight: 28,
    marginLeft: 10,
  },
  centerText: {
    textAlign: "center",
  },
  bottomText: {
    marginTop: "auto",
  },
  mt6: {
    marginTop: 6,
  },
});
