import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const screen1d = () => {
  return (
    <View style={styles.container}>
    
      <View style={{ marginVertical: 40 }}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#333"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#333"
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

      <Text style={{ marginTop: 20, textAlign: 'center' }}>
        When you agree to terms and conditions
      </Text>

      <TouchableOpacity>
        <Text style={styles.forgotText}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, textAlign: 'center' }}>Or login with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require('../assets/image/fb.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require('../assets/image/zalo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require('../assets/image/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EFDF',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CAE1D1',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#D94A38',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
  forgotText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialBtn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#275A8E',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});
