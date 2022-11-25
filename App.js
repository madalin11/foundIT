import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';
import  Login  from './Screens/Login';
import  Register from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminTabNavigator from './Screens/Admin/AdminTabNavigator';
import OperandTabNavigator from './Screens/Operand/OperandTabNavigator';
import UserTabNavigator from './Screens/User/UserTabNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer backgroundColor={'red'}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login screen" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register screen" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Admin tab navigator" component={AdminTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="Operand tab navigator" component={OperandTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="User tab navigator" component={UserTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
