import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  PanResponder,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const screenHeight = Dimensions.get("window").height;

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const [selectedCountry, setSelectedCountry] = useState("France (8)");
  const [selectedDance, setSelectedDance] = useState("Bachata (2)");
  const [selectedOtherCity, setSelectedOtherCity] = useState("Lyon (2)");
  const offset = useRef(0);

  // Animate open/close
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!visible) translateY.setValue(screenHeight);
    });
  }, [visible]);

  // Pan gesture for drag-down
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => gesture.dy > 5, // Start responding when dragged downward
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy > 0) {
          translateY.setValue(gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy > 150) {
          // Drag far enough → close
          Animated.timing(translateY, {
            toValue: screenHeight,
            duration: 200,
            useNativeDriver: true,
          }).start(onClose);
        } else {
          // Snap back to open
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const [expanded, setExpanded] = useState(true); // initially open
  const [expanded1, setExpanded1] = useState(true); // initially open
  const [expanded2, setExpanded2] = useState(true); // initially open

  const countries = ["France (8)", "Spain (4)", "Belgium (3)", "Swiss (1)"];
  const otherCity = [
    "Bordeaux (1)",
    "Limoges (1)",
    "Lyon (2)",
    "Marseille (1)",
  ];
  const danceCategory = [
    "Bachata (2)",
    "Kizomba (1)",
    "Salsa (1)",
    "Brazilian Zouk (1)",
  ];

  const CheckBox = ({ label, checked, onPress }: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.checkboxRow}
      onPress={onPress}
    >
      <View style={[styles.checkboxBox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );

  if (!visible) return null;

  return (
    <Modal transparent animationType="none">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity activeOpacity={1}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.modalContainer, { transform: [{ translateY }] }]}
          >
            <View style={styles.headerBar} />

            <ScrollView contentContainerStyle={styles.contentContainer}>
              <Text style={styles.sectionTitle}>Current Location</Text>
              <TouchableOpacity style={styles.locationBox}>
                <Image source={icons.locationt} style={styles.avatar} />
                <Text style={styles.locationText}> 100 km Radius</Text>
              </TouchableOpacity>
              <View style={styles.container}>
                <Text style={styles.sectionTitle}>Country</Text>

                <TouchableOpacity
                  onPress={() => setExpanded(!expanded)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name={
                      expanded ? "keyboard-arrow-down" : "keyboard-arrow-up"
                    }
                    size={30}
                    color={Colors.pureWhite}
                  />
                </TouchableOpacity>
              </View>
              {expanded &&
                countries.map((country) => (
                  <CheckBox
                    key={country}
                    label={country}
                    checked={selectedCountry === country}
                    onPress={() => setSelectedCountry(country)}
                  />
                ))}
              <View style={styles.line} />
              <View style={styles.container}>
                <Text style={[styles.sectionTitle, { marginTop: 5 }]}>
                  Other City
                </Text>
                <TouchableOpacity
                  onPress={() => setExpanded2(!expanded2)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name={
                      expanded2 ? "keyboard-arrow-down" : "keyboard-arrow-up"
                    }
                    size={30}
                    color={Colors.pureWhite}
                  />
                </TouchableOpacity>
              </View>
              {expanded2 &&
                otherCity.map((city) => (
                  <CheckBox
                    key={city}
                    label={city}
                    checked={selectedOtherCity === city}
                    onPress={() => setSelectedOtherCity(city)}
                  />
                ))}
              <View style={styles.line} />
              <View style={styles.container}>
                <Text style={[styles.sectionTitle, { marginTop: 5 }]}>
                  Dance
                </Text>
                <TouchableOpacity
                  onPress={() => setExpanded1(!expanded1)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name={
                      expanded1 ? "keyboard-arrow-down" : "keyboard-arrow-up"
                    }
                    size={30}
                    color={Colors.pureWhite}
                  />
                </TouchableOpacity>
              </View>
              {expanded1 &&
                danceCategory.map((dance) => (
                  <CheckBox
                    key={dance}
                    label={dance}
                    checked={selectedDance === dance}
                    onPress={() => setSelectedDance(dance)}
                  />
                ))}

              <TouchableOpacity style={styles.applyButton} onPress={onClose}>
                <Text
                  style={{
                    color: Colors.pureWhite,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  Apply Filters
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#9B5BFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    maxHeight: "100%",
  },
  headerBar: {
    width: 50,
    height: 4,
    backgroundColor: "#fff",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontFamily: FontFamily.semiBold,
    fontSize: 16,
    color: "#fff",
    marginTop: 15,
    marginBottom: 8,
  },
  locationBox: {
    backgroundColor: "#A46AFF",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: RFPercentage(0.1),
    borderColor: "#9868FF",
  },
  locationText: {
    color: "#fff",
    fontFamily: FontFamily.regular,
    marginLeft: RFPercentage(0.5),
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#fff",
  },
  checkmark: {
    color: "#9B5BFF",
    fontWeight: "700",
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
  applyButton: {
    backgroundColor: "#7B3FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    width: "100%",
    height: RFPercentage(0.1),
    backgroundColor: "#9868FF",
    borderRadius: RFPercentage(0.5),
    marginVertical: RFPercentage(1.5),
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 20,
    height: 20,
  },
});
