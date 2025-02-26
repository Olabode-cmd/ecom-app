import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SettingsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>App Settings</Text>
      
      <View style={styles.linkContainer}>
        <Link href="/" style={styles.link}>Logout</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});