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
import { Ionicons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
//Components
import Screen from "@/components/common/Screen";
import AppButton from "@/components/common/AppButton";

const Languages = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const handleBack = () => {
    router.back();
  };

  const languages = [
    { id: "1", name: "English", flag: "🇬🇧" },
    { id: "2", name: "French", flag: "🇫🇷" },
    { id: "3", name: "Spanish", flag: "🇪🇸" },
    { id: "4", name: "Italian", flag: "🇮🇹" },
    { id: "5", name: "Portuguese", flag: "🇵🇹" },
    { id: "6", name: "German", flag: "🇩🇪" },
    { id: "7", name: "Dutch", flag: "🇳🇱" },
    { id: "8", name: "Polish", flag: "🇵🇱" },
    { id: "9", name: "Romanian", flag: "🇷🇴" },
    { id: "10", name: "Greek", flag: "🇬🇷" },
    { id: "11", name: "Norwegian", flag: "🇳🇴" },
    { id: "12", name: "Finnish", flag: "🇫🇮" },
    { id: "13", name: "Swedish", flag: "🇸🇪" },
    { id: "14", name: "Danish", flag: "🇩🇰" },
  ];

  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={20}
                color={Colors.white}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Language</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icons.search} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "90%", marginTop: RFPercentage(4) }}>
          <Text style={styles.titleText}>Choose your preferred Language</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: RFPercentage(8),
            paddingHorizontal: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{ width: "100%" }}
        >
          {languages.map((lang) => {
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
                <Text style={styles.flagText}>{lang.flag}</Text>

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

                {/* Checkmark only when selected */}
                {isSelected && (
                  <View style={styles.checkedContainer}>
                    <FontAwesome6 name="check" size={12} color={Colors.white} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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

export default Languages;
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
    width: "92%",
    justifyContent: "space-between",
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
    width: "92%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.purple,
    padding: RFPercentage(1.5),
    justifyContent: "flex-start",
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
  flagText: {
    fontSize: RFPercentage(3.2),
  },
});
