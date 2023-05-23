import type { IconsType } from "~/UI/constants";
import type {
  TextInput,
  TextInputProps as BaseTextInputProps,
} from "react-native";

export type TextInputProps = {
  inputRef?: React.RefObject<TextInput>;
  iconName?: keyof IconsType;
  onIconPress?: (() => void) | undefined;
} & BaseTextInputProps;
