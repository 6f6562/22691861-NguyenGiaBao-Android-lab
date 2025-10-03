import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProductDetailScreen() {
  return (
    <View style={{margin: 20, backgroundColor: "#E941411A", padding: 20}}>
      <View style={{marginTop: 10}}>
      <Image 
      source={require('../assets/img/blue.png')}> </Image>
       </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

});
