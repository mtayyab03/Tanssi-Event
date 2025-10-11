import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
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
import { FontAwesome6 } from "@expo/vector-icons";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
//Components
import Screen from "@/components/common/Screen";
import AppHeader from "@/components/common/AppHeader";
import AppButton from "@/components/common/AppButton";
const Packages = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type?: string }>(); // 👈 get param here
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const handleBack = () => {
    router.back();
  };

  const handleBuyNow = () => {
    if (!selectedPack) return; // Require selection before navigating

    if (type === "country") {
      router.push("/(screens)/Profile/DanceType");
    } else {
      router.push("/(screens)/Profile/DetailPage");
    }
  };
  const Packages =
    type === "country"
      ? [
          { id: "1", name: "Basic", price: "€29,99" },
          { id: "2", name: "Premium", price: "€49,99" },
        ]
      : [
          { id: "1", name: "Basic", price: "€49,99" },
          { id: "2", name: "Premium", price: "€99,99" },
        ];
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <View style={{ marginTop: RFPercentage(1) }} />
        <AppHeader title="Pricing Packages" onPress={handleBack} />

        <View style={{ width: "70%", marginVertical: RFPercentage(5) }}>
          <Text style={styles.maintitleText}>
            {type === "country"
              ? "Promote an event in your country on the dance page"
              : "Promote an event internationally in Top Events"}
          </Text>
        </View>

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {Packages.map((lang) => {
            const isSelected = selectedPack === lang.id;
            return (
              <TouchableOpacity
                key={lang.id}
                activeOpacity={0.8}
                style={[
                  styles.PackContainer,
                  { borderColor: isSelected ? Colors.purple : Colors.stroke },
                ]}
                onPress={() => setSelectedPack(lang.id)}
              >
                {/* Language name */}
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={[
                      styles.titleText,
                      { fontFamily: FontFamily.semiBold, color: Colors.white },
                    ]}
                  >
                    {lang.name}
                  </Text>

                  <Text style={styles.priceText}>{lang.price}</Text>

                  <View style={styles.line} />
                  <Text style={styles.packageDesc}>
                    Your Event will be published for one month in ther Top Event
                    Banner
                  </Text>
                </View>

                {/* Checkmark only when selected */}
                {isSelected && (
                  <View style={styles.checkedContainer}>
                    <FontAwesome6 name="check" size={12} color={Colors.white} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        {/* button */}
        <TouchableOpacity
          onPress={handleBuyNow}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton
            title="Buy Now"
            buttonColor={Colors.purple}
            loading={loading}
          />
        </TouchableOpacity>
      </Screen>
    </LinearGradient>
  );
};

export default Packages;
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
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: fontSize(16),
    fontFamily: FontFamily.semiBold,
    color: "#fff",
    marginLeft: RFPercentage(1.5),
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
  profile: {
    width: 38,
    height: 38,
  },
  titleText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },
  priceText: {
    fontSize: fontSize(25),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginVertical: RFPercentage(2),
  },
  maintitleText: {
    fontSize: fontSize(26),
    fontFamily: FontFamily.regular,
    color: Colors.pureWhite,
    lineHeight: RFPercentage(6),
    textAlign: "center",
  },
  PackContainer: {
    width: "49%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.purple,
    padding: RFPercentage(1.5),
    justifyContent: "center",
    borderRadius: RFPercentage(1.4),
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(2.5),
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
  loginbutton: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
    position: "absolute",
    bottom: RFPercentage(5),
  },
  line: {
    width: "90%",
    height: RFPercentage(0.1),
    backgroundColor: Colors.stroke,
    borderRadius: RFPercentage(0.5),
    marginBottom: RFPercentage(1),
  },
  packageDesc: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    lineHeight: RFPercentage(3),
    textAlign: "center",
    marginVertical: RFPercentage(1),
  },
});
