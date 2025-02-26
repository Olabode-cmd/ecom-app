import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useNavigation } from "@react-navigation/native"

export default function App() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const router = useNavigation();

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
          router.push('/home');
        }, 1000);
      }
    } catch (error) {
      setError(error);
      console.log('Error. Try again later', error.message);
      Alert.alert(error)
    } finally {
      setLoading(false)
    }
  }

  const routeToHome = () => {
    router.navigate('Home');
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
            <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} style={styles.input} />

            {/* Button */}
            <Pressable style={styles.button} onPress={routeToHome}>

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
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  button: {
    // width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center'
  }
});
