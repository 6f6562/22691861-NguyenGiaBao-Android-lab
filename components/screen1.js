import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/image/elipse.png')}> </Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 800 }}>
          GROW YOUR BUSINESS
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 500 }}>
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
          <Text style={{ textAlign: 'center' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Text style={{ textAlign: 'center' }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
});
