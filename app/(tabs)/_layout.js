import "@ethersproject/shims";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Slot, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "@/constants/Colors";

import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  useTheme,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/Themed";
import Header from "@/components/Header";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  const BottomTabBar = ({ navigation, descriptors, state }) => (
    <BottomNavigation
      style={{ backgroundColor: theme["background-basic-color-3"] }}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];

        const icon = options.tabBarIcon !== undefined && options.tabBarIcon;

        const isFocused = state.index === index;

        return (
          <BottomNavigationTab
            key={route.key}
            title={options?.title}
            icon={() => icon({ focused: isFocused, size: 24 })}
          />
        );
      })}
    </BottomNavigation>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme["background-basic-color-3"] }}
    >
      <Tabs
        screenOptions={{ header: () => <Header /> }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "My ID",
            tabBarIcon: ({ focused, size }) => {
              return (
                <Icon
                  style={{ height: size, width: size }}
                  fill={
                    focused
                      ? theme["color-primary-500"]
                      : theme["text-basic-color"]
                  }
                  name="credit-card-outline"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Proofs",
            tabBarIcon: ({ focused, size }) => (
              <Icon
                style={{ height: size, width: size }}
                fill={
                  focused
                    ? theme["color-primary-500"]
                    : theme["text-basic-color"]
                }
                name="grid-outline"
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
