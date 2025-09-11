import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export const screen1e = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
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

      <View style={styles.inputContainer}>
        <TextInput placeholder="Birthday" style={styles.input} />
      </View>

      <View style={styles.genderRow}>
        <View style={styles.genderOption}>
          <View style={styles.radioCircle} />
          <Text style={styles.genderText}>Male</Text>
        </View>
        <View style={styles.genderOption}>
          <View style={styles.radioCircle} />
          <Text style={styles.genderText}>Female</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>
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
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CAE1D1',
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    width: 30,
    height: 30,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  genderText: {
    fontSize: 16,
  },
  registerBtn: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#D94A38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
  terms: {
    marginTop: 20,
    textAlign: 'center',
  },
});
