import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Documents from './Documents';
import Navigation from './Map';
import Requests from './Requests';
import Feedbacks from './Feedbacks';
import ModifyProfile from '../ModifyProfile';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'rgba(0, 255, 0, 0.1)' }, headerShown: false }}  >
            <Tab.Screen name="Documents" component={Documents} options={{
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
            <Tab.Screen name="Feedbacks" component={Feedbacks} options={{
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

export default UserTabNavigator

const styles = StyleSheet.create({})