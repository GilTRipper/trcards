import { useState } from "react";
import { TextInput } from "./TextInput";
import { TextInputProps } from "./types";

export const PasswordInput = ({ ...props }: TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <TextInput
      {...props}
      iconName={passwordVisible ? "eyeOpened" : "eyeClosed"}
      keyboardType="visible-password"
      textContentType="password"
      autoComplete="password"
      secureTextEntry={passwordVisible}
      onIconPress={() => {
        setPasswordVisible(!passwordVisible);
      }}
    />
  );
};
