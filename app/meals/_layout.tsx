import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#24180f" },
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[meal]" />
    </Stack>
  );
}
