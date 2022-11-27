import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Documents from './Documents';
import { Button, Switch } from 'react-native-elements';
import Login from '../Login';
import Accounts from './Accounts';
import Feedbacks from '../User/Feedbacks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../colors';
import Institutions from './Institutions';


const Tab = createBottomTabNavigator();

const AdminTabNavigator = () => {
    
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.TAB_COLOR }, headerShown: false }}  >
            <Tab.Screen name="Documents admin" component={Documents} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../../icons/documents.png')}
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
            <Tab.Screen name="Institutions" component={Institutions} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../../icons/inst.png')}
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
            <Tab.Screen name="Accounts" component={Accounts} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            source={require('../../icons/account.png')}
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
                            source={require('../../icons/feedback.png')}
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

export default AdminTabNavigator

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#202020'
    },
    text: {
        color: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})