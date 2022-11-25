import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Documents from './Documents';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'rgba(0, 255, 0, 0.1)' }, headerShown: false }}  >
            <Tab.Screen name="Documents" component={Documents} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image
                            //source={require('../iconsOurDent/chat.png')}
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