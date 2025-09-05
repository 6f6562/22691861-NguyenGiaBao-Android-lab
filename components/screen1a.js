import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export const screen1a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        style={styles.background}
      />

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/image/elipse.png')}> </Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 800 }}>
          GROW YOUR BUSINESS
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 500 }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.action}>
          <Text style={{ textAlign: 'center', fontWeight: 500 }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Text style={{ textAlign: 'center', fontWeight: 500 }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 800 }}>
          HOW WE WORK?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },

  action: {
    width: 150,
    height: 50,
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#E3C000',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
