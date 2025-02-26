import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiUrl = 'https://dummyjson.com/auth/login';

    const formData = {
      username: username,
      password: password
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        console.log('Login successful');
        Alert.alert('Login successful')

        setTimeout(() => {
          router.push('/(tabs)');
        }, 1000);
      }
    } catch (error) {
      setError(error);
      console.log('Error. Try again later', error.message);
      Alert.alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const routeToHome = () => {
    router.push('/(tabs)');
  }

  return (
    <ScrollView>
      <View style={styles.container} >
        <StatusBar hidden={false} />

        <View>
          <View>
            <Text style={styles.title}>Hello there</Text>
            <Text style={styles.subtitle}>Kindly input your user details</Text>
          </View>

          <View>
            <TextInput placeholder='Username' value={username} onChangeText={(text) => setUsername(text)} style={styles.input} />
            <TextInput placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={styles.input} />

            {/* Button */}
            <Pressable style={styles.button} onPress={onSubmit}>
              <Text style={{color: '#fff'}}>{loading ? (
                <View style={{flex: 1, flexDirection: 'row', gap: 4}}>
                  <Text style={{ color: '#fff' }}>Logging in...</Text>
                  <ActivityIndicator color="#fff" />
                </View>
              ) : 'Login'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  }
});