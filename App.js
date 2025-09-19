import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Screen4a from './components/Screen4a';
import Screen4b from './components/Screen4b';
import BaiTap3 from './components/BaiTap3';


export default function App() {
  return (
    <View style={styles.container}>
      <BaiTap3> </BaiTap3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
