import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, PRODUCT, ColorItem } from './Data';

export default function ColorPicker({ route }: any) {
  const navigation = useNavigation();

  const initialPick: ColorItem | undefined = route?.params?.colorPick;
  const [picked, setPicked] = useState<ColorItem | undefined>(initialPick);

  const headerImage = picked?.image ?? PRODUCT.defaultImage;
  const showChosenInfo = !!picked;

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={headerImage} style={s.thumb} resizeMode="contain" />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={2} style={{ fontWeight: '600' }}>
            {PRODUCT.title}
          </Text>
          {showChosenInfo && (
            <>
              <Text style={{ marginTop: 4 }}>Màu: {picked!.name}</Text>
              <Text style={{ marginTop: 2 }}>
                Cung cấp bởi {PRODUCT.supplier}
              </Text>
              <Text style={{ marginTop: 6, fontWeight: '700' }}>
                {PRODUCT.price}
              </Text>
            </>
          )}
        </View>
      </View>

      <View style={s.body}>
        <Text style={s.title}>Chọn một màu bên dưới:</Text>

        <View style={{ gap: 18, marginTop: 10 }}>
          {COLORS.map((c) => (
            <TouchableOpacity
              key={c.key}
              onPress={() => setPicked(c)}
              style={s.swatch}>
              <View style={[s.box, { backgroundColor: c.swatch }]} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={s.done}
          onPress={() =>
            navigation.navigate(
              'Product' as never,
              { colorPick: picked ?? COLORS[0] } as never
            )
          }>
          <Text style={s.doneTxt}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 12 },
  header: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  body: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 14,
  },
  title: { fontWeight: '600' },
  thumb: { width: 60, height: 60 },
  swatch: { width: 72, height: 72 },
  box: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  done: {
    marginTop: 20,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#5a71c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneTxt: { color: '#fff', fontWeight: '800' },
});
