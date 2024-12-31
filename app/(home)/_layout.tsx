import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          drawerActiveBackgroundColor: "#e4b45c",
          drawerActiveTintColor: "white",
          drawerContentStyle: {
            backgroundColor: "#351401",
          },
          drawerInactiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Meals",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "list" : "list-outline"}
                size={size}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="favourites"
          options={{
            title: "Favourites",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "star" : "star-outline"}
                size={size}
                color="white"
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
