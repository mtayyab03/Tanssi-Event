import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Alert,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
//Components
import Screen from "@/components/common/Screen";
import AppHeader from "@/components/common/AppHeader";
import AppButton from "@/components/common/AppButton";
import InputField from "@/components/common/InputField";

const DetailPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const handleBack = () => {
    router.back();
  };
  const onChangeName = (text: string) => {
    setName(text.toLowerCase());
  };
  const onChangeEmail = (text: string) => {
    setEmail(text.toLowerCase());
  };

  const isEmailValid = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isDateValid = (date: string) => {
    // Validates format dd/mm/yyyy
    const re = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    return re.test(date);
  };

  const isLinkValid = (url: string) => {
    const re = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([/?#].*)?$/;
    return re.test(url);
  };

  const handleSubmit = () => {
    if (!name || !email || !startDate || !endDate || !link) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isDateValid(startDate) || !isDateValid(endDate)) {
      Alert.alert("Invalid Date", "Dates must be in format dd/mm/yyyy.");
      return;
    }

    if (!isLinkValid(link)) {
      Alert.alert(
        "Invalid Link",
        "Please enter a valid link (e.g. https://example.com)."
      );
      return;
    }

    // All validations passed
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/(screens)/Profile/PaymentMethod");
    }, 1000);
  };
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <View style={{ marginTop: RFPercentage(1) }} />
        <AppHeader title="Detail Page" onPress={handleBack} />
        <View style={{ width: "90%", marginTop: RFPercentage(4) }}>
          <Text style={styles.titleText}>Enter Details to Proceed Payment</Text>
        </View>

        {/* InputFields */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <InputField
          label="Full Name"
          icon={icons.namee}
          value={name}
          placeholder="Your Name"
          onChangeText={onChangeName}
        />
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <InputField
          label="Email Address"
          icon={icons.emailicon}
          value={email}
          placeholder="Your Email"
          onChangeText={onChangeEmail}
        />
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <InputField
          label="Publication Start Date"
          icon={icons.calendar}
          value={startDate}
          placeholder="dd/mm/yyyy"
          onChangeText={setStartDate}
        />
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <InputField
          label="Publication End Date"
          icon={icons.calendar}
          value={endDate}
          placeholder="dd/mm/yyyy"
          onChangeText={setEndDate}
        />
        <View style={{ marginTop: RFPercentage(1.5) }} />
        <InputField
          label="Facebook link of Event"
          icon={icons.link}
          value={link}
          placeholder="www.example.com"
          onChangeText={setLink}
        />

        {/* button */}

        <View
          style={{
            width: "100%",
            alignItems: "center",
            position: "absolute",
            bottom: RFPercentage(5),
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(screens)/Profile/PreviewPage")}
            activeOpacity={0.7}
          >
            <Text style={styles.previewText}>Click to Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(screens)/Profile/PaymentMethod")}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton
              title="Done"
              buttonColor={Colors.purple}
              loading={loading}
            />
          </TouchableOpacity>
        </View>
      </Screen>
    </LinearGradient>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
  },
  titleText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },
  loginbutton: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  categoryCard: {
    width: "45%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: "center",
    padding: 3,
  },
  eventImage: {
    width: "100%",
    height: fontSize(100),
    borderRadius: 12,
  },
  previewText: {
    fontSize: fontSize(12),
    fontFamily: FontFamily.regular,
    color: Colors.purple,
    marginVertical: RFPercentage(1.5),
  },
  Inputmain: {
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
