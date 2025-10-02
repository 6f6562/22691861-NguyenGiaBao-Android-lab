export type ColorItem = {
  key: 'white' | 'red' | 'black' | 'blue';
  name: string;
  swatch: string;
  image: any;
};

export const COLORS: ColorItem[] = [
  {
    key: 'white',
    name: 'xanh nhạt',
    swatch: '#ccf4ff',
    image: require('../assets/img/white.png'),
  },
  {
    key: 'red',
    name: 'đỏ',
    swatch: '#e80f17',
    image: require('../assets/img/red.png'),
  },
  {
    key: 'black',
    name: 'đen',
    swatch: '#000000',
    image: require('../assets/img/black.png'),
  },
  {
    key: 'blue',
    name: 'xanh dương',
    swatch: '#204fb4',
    image: require('../assets/img/blue.png'),
  },
];

export const PRODUCT = {
  title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
  rating: 5,
  reviews: 828,
  price: '1.790.000 đ',
  oldPrice: '1.790.000 đ',
  supplier: 'Tiki Tradding',
  defaultImage: require('../assets/img/blue.png'),
};
