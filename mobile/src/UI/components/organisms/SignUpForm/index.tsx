import { StyleSheet, View } from "react-native";
import { Button, PasswordInput, Text, TextInput } from "../../atoms";
import { useRouter } from "expo-router";

export const SignUpForm = () => {
  const router = useRouter();

  const goLogin = () => {
    router.push("/(auth)/login");
  };

  return (
    <View style={styles.formWrapper}>
      <Text medium style={styles.formTitle}>
        Log In with Email
      </Text>
      <TextInput
        placeholder="Username"
        keyboardType="default"
        autoComplete="username"
        textContentType="username"
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <PasswordInput placeholder="Password" />
      <PasswordInput placeholder="Confirm password" />
      <Button>Sign up</Button>
      <Text style={[styles.bottomText, styles.centerText]}>
        Already have an account?{"  "}
        <Text semiBold onPress={goLogin}>
          Log in
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
});
