import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import { fontSize } from "@/constants/fontUtils";

const { width } = Dimensions.get("window");

type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  image: any; // local icon or { uri: string }
};

type Props = {
  data: EventItem[];
};

const EventCarousel: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / (width * 0.85 + 16)
    );
    setActiveIndex(slide);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={width * 0.85 + 16}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: RFPercentage(1) }}
        renderItem={({ item }) => (
          <View style={[styles.eventCard, { width: width * 0.85 }]}>
            <Image source={item.image} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{item.title}</Text>

            <View style={styles.row}>
              <View style={styles.eventInfo}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color={Colors.textColor}
                />
                <Text style={styles.eventText}>{item.location}</Text>
              </View>

              <View style={styles.eventInfo}>
                <View style={styles.divider} />
                <MaterialIcons
                  name="calendar-month"
                  size={16}
                  color={Colors.textColor}
                />
                <Text style={styles.eventText}>{item.date}</Text>
              </View>
            </View>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default EventCarousel;

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
  },
  eventImage: {
    width: "100%",
    height: RFPercentage(24.5),
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginTop: 15,
    marginLeft: RFPercentage(0.5),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(1.5),
    marginHorizontal: RFPercentage(0.5),
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: RFPercentage(0.1),
    height: RFPercentage(1.6),
    backgroundColor: Colors.stroke,
    marginRight: RFPercentage(1.5),
  },
  eventText: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    marginLeft: RFPercentage(0.5),
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.3),
    gap: RFPercentage(0.3),
  },
  dot: {
    width: RFPercentage(0.8),
    height: RFPercentage(0.8),
    borderRadius: RFPercentage(2),
    backgroundColor: Colors.primary,
    marginHorizontal: RFPercentage(0.2),
  },
  activeDot: {
    width: RFPercentage(2),
    backgroundColor: Colors.purple,
  },
});
