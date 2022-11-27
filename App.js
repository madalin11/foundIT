import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminTabNavigator from './Screens/Admin/AdminTabNavigator';
import OperandTabNavigator from './Screens/Operand/OperandTabNavigator';
import UserTabNavigator from './Screens/User/UserTabNavigator';
import Splash from './Screens/Splash/Splash';
import GetStarted from './Screens/Splash/GetStarted';
import DocumentDetails from './Screens/User/DocumentDetails';
import CreateRequest from './Screens/User/CreateRequest';
import RequestDetails from './Screens/User/RequestDetails';
import AddFeedback from './Screens/User/AddFeedback';
import AddDocument from './Screens/Admin/AddDocument';
import ModifyDocument from './Screens/Admin/ModifyDocument';
import ModifyAccount from './Screens/Admin/ModifyAccount';
import ModifyInstitution from './Screens/Admin/ModifyInstitution';
import AddInstitution from './Screens/Admin/AddInstitution';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer backgroundColor={'red'}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Splash screen" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="Get started screen" component={GetStarted} />
        <Stack.Screen options={{ headerShown: false }} name="Login screen" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register screen" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Admin tab navigator" component={AdminTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="Operand tab navigator" component={OperandTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="User tab navigator" component={UserTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="Document details screen" component={DocumentDetails} />
        <Stack.Screen options={{ headerShown: false }} name="Create request screen" component={CreateRequest} />
        <Stack.Screen options={{ headerShown: false }} name="Request details screen" component={RequestDetails} />
        <Stack.Screen options={{ headerShown: false }} name="Add feedback screen" component={AddFeedback} />
        <Stack.Screen options={{ headerShown: false }} name="Add document screen" component={AddDocument} />
        <Stack.Screen options={{ headerShown: false }} name="Modify document screen" component={ModifyDocument} />
        <Stack.Screen options={{ headerShown: false }} name="Modify account screen" component={ModifyAccount} />
        <Stack.Screen options={{ headerShown: false }} name="Add institution screen" component={AddInstitution} />
        <Stack.Screen options={{ headerShown: false }} name="Modify institution screen" component={ModifyInstitution} />


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
