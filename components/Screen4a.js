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
import ProductItem from './ProductItem';



const dataList = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('../assets/images/cooker.png'),
    shop: 'Shop Devang',
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    image: require('../assets/images/chicken.png'),
    shop: 'LTD Food',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    image: require('../assets/images/truck.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    image: require('../assets/images/firetruck.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    image: require('../assets/images/book1.png'),
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    image: require('../assets/images/book2.png'),
    shop: 'Minh Long Book',
  },
  {
    id: '7',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('../assets/images/cooker.png'),
    shop: 'Shop Devang',
  },
  {
    id: '8',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    image: require('../assets/images/chicken.png'),
    shop: 'LTD Food',
  },
  {
    id: '9',
    title: 'Xe cần cẩu đa năng',
    image: require('../assets/images/truck.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '10',
    title: 'Đồ chơi dạng mô hình',
    image: require('../assets/images/firetruck.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '11',
    title: 'Lãnh đạo giản đơn',
    image: require('../assets/images/book1.png'),
    shop: 'Minh Long Book',
  },
  {
    id: '12',
    title: 'Hiểu lòng con trẻ',
    image: require('../assets/images/book2.png'),
    shop: 'Minh Long Book',
  },
];

const FlatListBasics = () => {
  return (
    <SafeAreaView style={styles.container}>

    <View style={{}}> 
      <Text style={{textAlign:'center', fontSize: 20, padding: 20}}>Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại chat với shop!</Text>
      
    </View>

    <View style={{}}> 
      <FlatList data ={dataList}
        renderItem = {({item}) => <ProductItem image= {item.image} title={item.title} shop = {item.shop}/>}
      > 
      </FlatList>
    </View>

    </SafeAreaView>
  );
};

export default FlatListBasics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start'
  },
});
