import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Meals" }} />
        <Drawer.Screen name="favourites" options={{ title: "Favourites" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
