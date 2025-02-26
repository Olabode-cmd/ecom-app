import { View, Text, StyleSheet, Animated, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect, useRef } from 'react'

export default function ProfileTab() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;
  
  // Animate on scroll test
  const scrollY = useRef(new Animated.Value(0)).current;

  const moveBox = () => {
    moveAnim.setValue(0);
    Animated.timing(moveAnim, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your Profile Information</Text>

      <View style={styles.linkContainer}>
        <Link href="/" style={styles.link}>Logout</Link>
      </View>

      <Animated.View style={[styles.box, { translateX: moveAnim }]}>
        <Text style={styles.text}>Hello, Animated!</Text>
      </Animated.View>

      <Pressable onPress={moveBox}>
        <Text>Move box</Text>
      </Pressable>
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
  },
  box: { width: 200, height: 100, backgroundColor: "tomato", justifyContent: "center", alignItems: "center" },
  text: { color: "white", fontSize: 18 }
});