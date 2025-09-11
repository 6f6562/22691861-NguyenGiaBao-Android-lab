import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const screen2a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FBCB01', '#BF9A00']}
        locations={[0.0003, 0.8]}
        style={styles.background}
      />

      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/image/user.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#000"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/image/lock.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#000"
        />
        <TouchableOpacity>
          <Image
            source={require('../assets/image/eye.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 20,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 40,
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9B918',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  icon: {
    width: 24,
    height: 24,
  },
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 2,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
  createAccount: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
