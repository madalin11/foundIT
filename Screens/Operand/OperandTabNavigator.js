import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Requests from './Requests';
import ModifyProfile from '../ModifyProfile';
import colors from '../../colors';

const Tab = createBottomTabNavigator();

const OperandTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.BLUE }, headerShown: false }}  >
            <Tab.Screen name="Requests" component={Requests} options={{
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
    )
}

export default OperandTabNavigator

const styles = StyleSheet.create({})