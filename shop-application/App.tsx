import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './screens/Products';
import { RootStackParamList } from './types/Navigation';
import ProductDetailView from './screens/ProductDetailView';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootStack.Navigator initialRouteName='Products'>
          <RootStack.Screen name='Products' component={Products} />
          <RootStack.Screen name='ProductDetailView' component={ProductDetailView} />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
