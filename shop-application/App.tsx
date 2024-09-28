import { StyleSheet, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './screens/Products';
import { RootStackParamList } from './types/Navigation';
import ProductDetailView from './screens/ProductDetailView';
import { COLORS } from './styles/colors';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <RootStack.Navigator initialRouteName='Products'>
            <RootStack.Screen name='Products' component={Products} options={{ headerShown: false }}/>
            <RootStack.Screen name='ProductDetailView' component={ProductDetailView} />
          </RootStack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
