import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PRODUCT } from './Data';

export default function Product({ route }: any) {
  const navigation = useNavigation();

  const chosen = route?.params?.colorPick;
  const img = chosen?.image ?? PRODUCT.defaultImage;
  const selectorLabel = chosen ? '4 MÀU-CHỌN LOẠI' : '4 MÀU-CHỌN MÀU';

  return (
    <View style={s.container}>
      <View style={s.card}>
        <View style={[s.center, { marginBottom: 8 }]}>
          <Image source={img} style={s.phoneImage} resizeMode="contain" />
        </View>

        <Text style={s.title}>{PRODUCT.title}</Text>

        <View style={[s.row, { marginTop: 6 }]}>
          <Text style={s.star}>★★★★★</Text>
          <Text style={{ marginLeft: 8 }}>
            (Xem {PRODUCT.reviews} đánh giá)
          </Text>
        </View>

        <View style={[s.row, { marginTop: 6, alignItems: 'flex-end' }]}>
          <Text style={s.price}>{PRODUCT.price}</Text>
          <Text style={s.oldPrice}> {PRODUCT.oldPrice}</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#ef2f2f', fontSize: 12, marginBottom: 10 }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>

          <TouchableOpacity
            style={s.selector}
            onPress={() =>
              navigation.navigate(
                'ColorPicker' as never,
                { colorPick: chosen } as never
              )
            }>
            <Text style={{ color: '#666' }}>{selectorLabel}</Text>
            <Text style={{ fontSize: 18 }}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={s.buyBtn}>
        <Text style={s.buyTxt}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 12 },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 12, elevation: 2 },
  center: { alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  phoneImage: { width: 220, height: 300 },
  title: { fontSize: 14, fontWeight: '600' },
  star: { color: '#ffcc00', fontSize: 16 },
  price: { fontSize: 18, fontWeight: '800' },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginLeft: 10,
  },
  selector: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyBtn: {
    backgroundColor: '#ef2f2f',
    height: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buyTxt: { color: '#fff', fontWeight: '800' },
});
