import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const screen1c = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        style={styles.background}
      />

      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Text style={styles.title}>CODE</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.subtitle}>VERIFICATION</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={styles.description}>
          Enter ontime password sent on{'\n'}++849092605798
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <TextInput style={styles.otpBox} maxLength={1} />
        <TextInput style={styles.otpBox} maxLength={1} />
        <TextInput style={styles.otpBox} maxLength={1} />
        <TextInput style={styles.otpBox} maxLength={1} />
        <TextInput style={styles.otpBox} maxLength={1} />
        <TextInput style={styles.otpBox} maxLength={1} />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '800',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpBox: {
    borderWidth: 2,
    borderColor: '#000',
    width: 70,
    height: 70,
    textAlign: 'center',
    fontSize: 22,
  },
  action: {
    width: '90%',
    height: 50,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
});
