import { Text, View, StyleSheet } from "react-native";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
