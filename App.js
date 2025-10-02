import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Product from './components/Product';
import ColorPicker from './components/ColorPicker';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="ColorPicker" component={ColorPicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
