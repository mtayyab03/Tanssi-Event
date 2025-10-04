import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useFonts } from "expo-font";

import { useColorScheme } from "@/hooks/use-color-scheme";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    InterThin: require("../assets/fonts/Inter_18pt-Thin.ttf"),
    InterLight: require("../assets/fonts/Inter_18pt-Light.ttf"),
    InterRegular: require("../assets/fonts/Inter_18pt-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter_18pt-Medium.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter_18pt-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
    InterBlack: require("../assets/fonts/Inter_18pt-Black.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(screens)/Login/SplashScreen">
        <Stack.Screen
          name="(screens)/Login/SplashScreen"
          options={{ headerShown: false }}
        />

        {/* Main */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="(screens)/Main/ChatScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(screens)/Main/EventsScreen"
          options={{ headerShown: false }}
        />

        {/* Profile */}

        <Stack.Screen
          name="(screens)/Profile/Languages"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(screens)/Profile/SupportScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(screens)/Profile/TermsCondition"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
