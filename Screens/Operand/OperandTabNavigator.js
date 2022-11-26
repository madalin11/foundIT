import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Requests from './Requests';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModifyProfile from '../ModifyProfile';

const Tab = createBottomTabNavigator();

const OperandTabNavigator = () => {
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'rgba(0, 255, 0, 0.1)' }, headerShown: false }}  >
            <Tab.Screen name="Profile" component={ModifyProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../../icons/login.png')}
                            resizeMode='contain'
                            style={{
                                width: 26,
                                height: 26,
                            }}
                        />
                    </View>
                ),

            }}
            />
        </Tab.Navigator>
}

export default OperandTabNavigator

const styles = StyleSheet.create({})