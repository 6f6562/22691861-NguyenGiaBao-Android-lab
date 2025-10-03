import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { DATA } from './Data';

export default function ProductListScreen() {
  return (
    <View style={{ margin: 20 }}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'red', fontSize: 26, fontWeight: 700 }}>
          The world best choice
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text_btn}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text_btn}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text_btn}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E941411A',
                borderRadius: 30,
                padding: 3
              }}>
              <Image
                source={item.imgUri}
                style={{ width: 150, height: 150 }}></Image>
              <Text style={{ textShadowColor: 'gray' }}>{item.name}</Text>
              <Text>${item.price}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={{ margin: 5, gap: 10 }}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_btn: {
    color: 'red',
    fontSize: 20,
    fontWeight: 600,
  },
});
