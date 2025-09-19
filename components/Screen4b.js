import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from './ProductItemHorizontal';

const dataList = [
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 1,
    comment: '15',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNOeNbymNYajBLGKS2ND0OyySkn-FAEKkOA&s',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 2,
    comment: '15',
    image: 'https://media.loveitopcdn.com/3817/thumb/10369-5.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 3,
    comment: '15',
    image:
      'https://phukienpc.vn/wp-content/uploads/2021/02/giac-ps-2-md6-sang-usb-phukienpc-vn-4.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 5,
    comment: '15',
    image:
      'https://phukiencom.vn/wp-content/uploads/2024/09/dau-chuyen-doi-usb-sang-ps2-chan-cai-phukiencom-vn-1.png',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 1,
    comment: '15',
    image:
      'https://ugreenvietnam.com.vn/images/img/cap-chuyen-doi-usb-2-0-cong-ps-2-cho-ban-phim-chuot-ugreen-20219-chinh-hang_3156.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 2,
    comment: '15',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcQ6L__j-Jn2BuyWmdEn0Ic9II_iryngxLg&s',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 3,
    comment: '15',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNOeNbymNYajBLGKS2ND0OyySkn-FAEKkOA&s',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 3,
    comment: '15',
    image: 'https://media.loveitopcdn.com/3817/thumb/10369-5.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 3,
    comment: '15',
    image:
      'https://phukienpc.vn/wp-content/uploads/2021/02/giac-ps-2-md6-sang-usb-phukienpc-vn-4.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 5,
    comment: '15',
    image:
      'https://phukiencom.vn/wp-content/uploads/2024/09/dau-chuyen-doi-usb-sang-ps2-chan-cai-phukiencom-vn-1.png',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 5,
    comment: '15',
    image:
      'https://ugreenvietnam.com.vn/images/img/cap-chuyen-doi-usb-2-0-cong-ps-2-cho-ban-phim-chuot-ugreen-20219-chinh-hang_3156.jpg',
  },
  {
    product_name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '-39%',
    rating: 5,
    comment: '15',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcQ6L__j-Jn2BuyWmdEn0Ic9II_iryngxLg&s',
  },
];

const FlatListBasics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <Text style={{ textAlign: 'center', fontSize: 20, padding: 20 }}>
          Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại chat với shop!
        </Text>
      </View>

      <View style={{}}>
        <FlatList
          data={dataList}
          numColumns={2}
          renderItem={({ item }) => <ProductItem product={item} />}
          columnWrapperStyle={{ columnGap: 1 }}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default FlatListBasics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
