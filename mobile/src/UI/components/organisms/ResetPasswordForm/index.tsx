import { StyleSheet, View } from "react-native";
import { Button, PasswordInput, Text, TextInput } from "../../atoms";
import { useRouter } from "expo-router";

export const ResetPasswordForm = () => {
  return (
    <View style={styles.formWrapper}>
      <View style={styles.titleWrapper}>
        <Text medium style={styles.formTitle}>
          Reset Password
        </Text>
        <Text>We will send a reset password link to your email.</Text>
      </View>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <Button>Send Email</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    marginTop: 65,
    gap: 16,
  },
  titleWrapper: {
    gap: 6,
    marginLeft: 10,
  },
  formTitle: {
    fontSize: 24,
    lineHeight: 28,
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
