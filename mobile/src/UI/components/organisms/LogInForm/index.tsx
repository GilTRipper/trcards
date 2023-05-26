import { StyleSheet, View } from "react-native";
import { Button, PasswordInput, Text, TextInput } from "../../atoms";
import { Link } from "expo-router";

export const LoginForm = () => {
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
      <Button>Log in</Button>
      <Text style={[styles.centerText, styles.mt6]}>
        Forgot your password?{"  "}
        <Text semiBold>
          <Link href="/auth/reset-password">Reset here</Link>
        </Text>
      </Text>
      <Text style={[styles.bottomText, styles.centerText]}>
        Don’t have an account?{"  "}
        <Text semiBold>
          <Link href="/auth/sign-up">Sign Up</Link>
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
