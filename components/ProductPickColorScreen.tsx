import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { PHONE } from './ProductData';

export default function ProductPickColorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View>
          <Image
            source={PHONE.colors[0].image}
            style={{ width: 200, height: 150 }}
            resizeMode="contain"></Image>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>{PHONE.name} </Text>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: 'gray',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{ justifyContent: 'flex-start', flex: 1 }}>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 500 }}>
              {' '}
              Chọn một trong các màu dưới đây
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: 120,
                height: 120,
                marginVertical: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: 120,
                height: 120,
                marginVertical: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 120,
                height: 120,
                marginVertical: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'navy',
                width: 120,
                height: 120,
                marginVertical: 5,
              }}></TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'navy',
              height: 50,
              borderRadius: 10,
              margin: 5,
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 25,
                color: 'white',
                textAlign: 'center',
              }}>
              CHỌN
            </Text>
          </TouchableOpacity>
        </View>
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
  },
});
