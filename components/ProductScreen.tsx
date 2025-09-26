import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { PHONE } from './ProductData';

export default function ProductScreen() {
  const [selectedColor, setSelectedColor] = useState(PHONE?.colors[0]);
  console.log(PHONE);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={selectedColor?.image}
          style={{ width: 450, height: 400 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textFont}>{PHONE.name}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={styles.textFont}>{PHONE.rating} </Text>
          <Text style={styles.textFont}>(Xem {PHONE.reviews} đánh giá)</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={{ fontWeight: 800, fontSize:  20 }}>{PHONE.price} đ </Text>
          <Text style={{ textDecorationLine: 'line-through', fontSize: 20 }}>
            {PHONE.price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flex: 1,
          }}>
          <Text style={{ fontWeight: 600, color: 'red', fontSize: 20 }}>
            Ở đâu rẻ hơn hoàn tiền{' '}
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 100,
              borderColor: 'black',
              borderWidth: 1,
              width: 25,
              height: 25,
            }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{ textAlign: 'center' }}>4 MÀU - CHỌN MÀU</Text>
          </TouchableOpacity>{' '}
        </View>
      </View>

      <View style={{ flex: 1, justifyContent:'flex-end', width:'100%' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  textFont: {
    fontSize: 20
  }
});
