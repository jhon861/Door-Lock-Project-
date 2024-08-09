import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

// Correct the server URL
const serverUrl = 'http://192.168.100.19:5000';

export default function App() {
  const sendUnlockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/unlock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error unlocking door:', error);
      Alert.alert('Error', 'Error unlocking door');
    }
  };

  const sendLockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/lock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error locking door:', error);
      Alert.alert('Error', 'Error locking door');
    }

  };

  const sendTULCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/tul`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error locking door:', error);
      Alert.alert('Error', 'Error locking door');
    }

  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://thumbs.dreamstime.com/b/remote-controller-icon-142121468.jpg' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>Door Lock Control</Text>
      <View style={styles.card}>
      <TouchableOpacity style={styles.button1} onPress={sendTULCommand}>
          <Text style={styles.buttonText}>Open and Close door</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sendUnlockCommand}>
          <Text style={styles.buttonText}>Unlock Door</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sendLockCommand}>
          <Text style={styles.buttonText}>Lock Door</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  button1: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
