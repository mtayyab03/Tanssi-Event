import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import { fontSize } from "@/constants/fontUtils";

interface InputFieldProps {
  label: string;
  icon: any;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  return (
    <>
      <View style={{ width: "90%", marginVertical: RFPercentage(1.2) }}>
        <Text style={[styles.titleText, { fontFamily: FontFamily.regular }]}>
          {label}
        </Text>
      </View>

      <View style={styles.inputMain}>
        <Image source={icon} style={styles.avatar} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={"#D1D5DE"}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </View>
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },
  inputMain: {
    width: "90%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    padding: RFPercentage(1.5),
    justifyContent: "flex-start",
    borderRadius: RFPercentage(1.4),
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "80%",
    fontFamily: FontFamily.regular,
    color: Colors.white,
    fontSize: fontSize(13),
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: RFPercentage(1.2),
  },
});
