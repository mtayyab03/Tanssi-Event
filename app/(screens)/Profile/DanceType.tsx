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
import AppHeader from "@/components/common/AppHeader";
import AppButton from "@/components/common/AppButton";

const DanceType = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleBack = () => {
    router.back();
  };
  const handlePress = (item: any) => {
    setSelectedId(item.id);
  };

  const categories = [
    {
      id: "1",
      title: "Bachata",
      image: icons.bachata,
    },
    {
      id: "2",
      title: "Kizomba",
      image: icons.kizomba,
    },
    { id: "3", title: "Salsa", image: icons.salsa },
    {
      id: "4",
      title: "Brazilian Zouk",
      image: icons.event12,
    },
  ];
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <View style={{ marginTop: RFPercentage(1) }} />
        <AppHeader title="Dance Type" onPress={handleBack} />
        <View style={{ width: "90%", marginTop: RFPercentage(4) }}>
          <Text style={styles.titleText}>Choose your Dance Type</Text>
        </View>

        {/* Categories Grid */}

        <View
          style={{
            width: "95%",
            flexWrap: "wrap",
            marginTop: RFPercentage(2),
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {categories.map((item) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={[
                styles.categoryCard,
                selectedId === item.id && { borderColor: Colors.purple },
              ]}
              onPress={() => handlePress(item)}
            >
              <Image source={item.image} style={styles.eventImage} />
              <Text style={styles.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* button */}
        <TouchableOpacity
          onPress={() => router.push("/(screens)/Profile/DetailPage")}
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

export default DanceType;

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
    marginTop: RFPercentage(3),
    position: "absolute",
    bottom: RFPercentage(5),
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
  eventTitle: {
    fontSize: fontSize(12),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginVertical: 5,
  },
});
