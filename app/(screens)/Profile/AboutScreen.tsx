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
import AppHeader from "@/components/common/AppHeader";
import AppButton from "@/components/common/AppButton";

const AboutScreen = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleBack = () => {
    router.back();
  };
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };
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
            <Text style={styles.headerTitle}>About Us</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icons.search} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: RFPercentage(10) }}
          >
            <Text style={styles.aboutDesc}>
              <Text style={styles.title}>
                1. Electronic Communications{"\n"}
              </Text>
              By using TANSSI, you consent to receive electronic communications
              from us, which may include event notifications, app updates, or
              promotional information.{"\n"}
              {"\n"}
              <Text style={styles.title}>
                2. Content and Recommendations {"\n"}
              </Text>
              TANSSI provides you with personalized dance event recommendations
              based on your preferences and previous interactions. These
              recommendations are intended to improve your user experience.
              {"\n"}
              {"\n"}{" "}
              <Text style={styles.title}>3. Intellectual Property{"\n"}</Text>
              TANSSI content, including text, images, and event information, is
              protected by intellectual property laws. Any unauthorized reuse of
              this content is strictly prohibited.{"\n"}
              {"\n"}
              <Text style={styles.title}>4. License and Access{"\n"}</Text> By
              complying these Terms of Use, you are granted a limited license to
              access and use TANSSI for personal, non-commercial purposes, Any
              commercial use requires our prior written consent.{"\n"}
              {"\n"}
              <Text style={styles.title}>5. User account{"\n"}</Text> To access
              certain features, you may be asked to create an account, You are
              responsible for the security of your account and the accuracy of
              the information provided.{"\n"}
              {"\n"}
              <Text style={styles.title}> 6. User content{"\n"}</Text> You can
              share reviews or content relating to events. This content must not
              be illegal, offensive, or infringe the rights of others. We
              reserve the right to remove any non-compliant content.{"\n"}
              {"\n"}{" "}
              <Text style={styles.title}>
                7. Advertising and Promotion{"\n"}
              </Text>{" "}
              Advertising and Promotion of Events Event organizers can choose to
              promote their events on TANSSI. The terms of this promotion are
              governed by specific agreements.{"\n"}
              {"\n"}
              <Text style={styles.title}> 8. Responsibility{"\n"}</Text> TANSSI
              strives to provide accurate information about events but cannot
              guarantee the accuracy or reliability of the data provided. We are
              not responsible for cancellations or changes to events.{"\n"}
              {"\n"}{" "}
              <Text style={styles.title}>9. Changes to the Terms{"\n"}</Text>{" "}
              Changes to the Terms of Use We reserve the right to modify these
              Terms of Use at any time. Your continued use of the App signifies
              your acceptance of the changes.{"\n"}
              {"\n"}{" "}
              <Text style={styles.title}>10. Applicable right{"\n"}</Text> These
              Terms of Use are governed by the law applicable in the user’s
              country of residence. Any dispute relating to these conditions
              will be submitted to the competent courts of that country.{"\n"}
              {"\n"} <Text style={styles.title}> 11. Contact{"\n"}</Text> For
              any questions or complaints regarding TANSSI, please contact us
              via the contact details provided in the app.
            </Text>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(3),
              }}
            >
              <TouchableOpacity
                onPress={handleToggle}
                activeOpacity={0.7}
                style={[
                  styles.checkedContainer,
                  {
                    backgroundColor: isChecked ? Colors.purple : "none", // show filled when checked
                  },
                ]}
              >
                {isChecked && (
                  <FontAwesome6 name="check" size={12} color={Colors.white} />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.regular,
                  fontSize: fontSize(14),
                  marginLeft: RFPercentage(1),
                }}
              >
                Agree to Terms
              </Text>
            </View>

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
          </ScrollView>
        </View>
      </Screen>
    </LinearGradient>
  );
};

export default AboutScreen;
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
    justifyContent: "space-between",
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
  checkedContainer: {
    width: RFPercentage(2),
    height: RFPercentage(2),
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: RFPercentage(0.2),
  },
  loginbutton: {
    width: "100%",
    marginTop: RFPercentage(2),
  },
});
