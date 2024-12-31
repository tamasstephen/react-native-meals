import { Pressable, StyleSheet, View } from "react-native";

export default function IconButton({
  children: icon,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" + 0.5 }}
        onPress={onClick}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        {icon}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
  },
  button: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.7,
  },
});
