import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MINDBOOK</Text>
      <Text style={styles.subtitle}>
        Where ideas, art and research meet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 4,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
});