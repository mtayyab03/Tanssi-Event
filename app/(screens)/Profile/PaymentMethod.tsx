import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
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
import AppButton from "@/components/common/AppButton";
import AppHeader from "@/components/common/AppHeader";

const PaymentMethod = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const handleBack = () => {
    router.back();
  };

  const payment = [
    { id: "1", name: "Apple Pay", icon: icons.apay },
    { id: "2", name: "Amazon Pay", icon: icons.amzpay },
    { id: "3", name: "Debit card", icon: icons.dc },
    { id: "4", name: "Payoneer", icon: icons.poynr },
    { id: "5", name: "Google Pay", icon: icons.gpay },
    { id: "6", name: "Skrill", icon: icons.skrill },
    { id: "7", name: "Paypal", icon: icons.paypal },
    { id: "8", name: "Visa", icon: icons.visa },
  ];
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <AppHeader title="Payment Method" onPress={handleBack} />

        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(3),
            marginBottom: RFPercentage(1),
          }}
        >
          <Text style={styles.titleText}>Choose payment Method</Text>
        </View>
        {payment.map((lang) => {
          const isSelected = selectedLang === lang.id;
          return (
            <TouchableOpacity
              key={lang.id}
              activeOpacity={0.8}
              style={[
                styles.langContainer,
                { borderColor: isSelected ? Colors.purple : Colors.stroke },
              ]}
              onPress={() => setSelectedLang(lang.id)}
            >
              {/* Flag emoji */}
              <Image source={lang.icon} style={styles.avatar} />

              {/* Language name */}
              <View style={{ marginLeft: RFPercentage(2), width: "70%" }}>
                <Text
                  style={[
                    styles.titleText,
                    { fontFamily: FontFamily.regular, color: Colors.white },
                  ]}
                >
                  {lang.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* button */}
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/Home")}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton
            title="Done"
            buttonColor={Colors.purple}
            loading={loading}
          />
        </TouchableOpacity>
      </Screen>
    </LinearGradient>
  );
};

export default PaymentMethod;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
    position: "absolute",
    bottom: RFPercentage(5),
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // alignItems: "center",
    // paddingHorizontal: 15,
  },
  gradient: {
    flex: 1,
  },
  aboutDesc: {
    color: "#BACDF4",
    fontFamily: FontFamily.regular,
    fontSize: fontSize(12),
    lineHeight: 25,
  },
  title: {
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    fontSize: fontSize(14),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: fontSize(16),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginLeft: RFPercentage(1.5),
  },
  titleText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    padding: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 24,
    height: 24,
  },
  langContainer: {
    width: "90%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.purple,
    padding: RFPercentage(1.5),
    paddingVertical: RFPercentage(2),
    justifyContent: "flex-start",
    borderRadius: RFPercentage(1.4),
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1.8),
    overflow: "hidden",
  },
  checkedContainer: {
    width: RFPercentage(2),
    height: RFPercentage(2),
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderBottomLeftRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Colors.purple,
    position: "absolute",
    right: 0,
    top: 0,
  },
  flagText: {
    fontSize: RFPercentage(3.2),
  },
});
