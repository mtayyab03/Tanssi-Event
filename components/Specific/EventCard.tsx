import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

interface EventCardProps {
  id: string;
  title: string;
  location: string;
  date: string;
  image: any; // If your images are local (icons.*), keep `any`, else use `string`
  participants: { id: string; image: ImageSourcePropType }[];
  extraCount?: number;
  onPress?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  location,
  date,
  image,
  participants,
  extraCount,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={id}
      style={styles.eventCard}
      onPress={onPress}
    >
      <Image source={image} style={styles.eventImage} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: RFPercentage(0.5),
          marginTop: RFPercentage(1.3),
        }}
      >
        <Text style={styles.eventTitle}>{title}</Text>

        {/* Avatars */}
        <View style={styles.avatarsContainer}>
          {participants.slice(0, 3).map((p, index) => (
            <View key={p.id} style={{ position: "relative" }}>
              <Image
                source={p.image}
                style={[styles.avatar, { marginLeft: index === 0 ? 0 : -10 }]}
              />

              {/* Show +count bubble slightly on top of the last avatar */}
              {extraCount && index === 2 && (
                <View style={styles.extraBadge}>
                  <Text style={styles.extraText}>+{extraCount}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.row}>
        {/* Location */}
        <View style={styles.eventInfo}>
          <Ionicons
            name="location-outline"
            size={16}
            color={Colors.textColor}
          />
          <Text style={styles.eventText}>{location}</Text>
        </View>

        {/* Date */}
        <View style={styles.eventInfo}>
          <MaterialIcons
            name="calendar-month"
            size={16}
            color={Colors.textColor}
          />
          <Text style={styles.eventText}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventImage: {
    width: "100%",
    height: RFPercentage(21.5),
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  eventText: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    marginLeft: RFPercentage(0.5),
  },
  eventCard: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    padding: 10,
    marginTop: RFPercentage(2),
    marginHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(0.8),
    marginHorizontal: RFPercentage(0.5),
  },
  avatarsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: RFPercentage(3),
    height: RFPercentage(3),
    borderRadius: RFPercentage(2),
    borderWidth: 1,
    borderColor: "#0B1635",
  },
  extraCount: {
    backgroundColor: "#2A3A60",
    justifyContent: "center",
    alignItems: "center",
  },
  extraText: {
    color: Colors.white,
    fontSize: RFPercentage(0.8),
    fontFamily: FontFamily.bold,
  },
  extraBadge: {
    position: "absolute",
    top: 10, // lifts above the avatar
    right: 7, // shifts slightly to the right corner
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventCard;
