import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: '#F9F7F6',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f7e5e4',
          height: 300,
          borderRadius: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/img/blue.png')}
          style={{ width: 200, height: 200, resizeMode: 'center' }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 23,
            width: 200,
            textAlign: 'center',
          }}>
          POWER BIKE SHOP
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Pressable
          style={{
            height: 50,
            borderRadius: 20,
            backgroundColor: '#E94141',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;