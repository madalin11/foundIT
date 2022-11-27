import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Navigation from '../../Components/Map';
import Requests from './Requests';
import Feedbacks from './Feedbacks';
import BigMap from './BigMap';
import ModifyProfile from '../ModifyProfile';
import colors from '../../colors';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.BLUE }, headerShown: false }}  >
            <Tab.Screen name="Home" component={Home} options={{
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
        </Tab.Navigator>
    )
}

export default UserTabNavigator

const styles = StyleSheet.create({})