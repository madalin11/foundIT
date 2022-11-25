import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Requests = () => {
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
}

export default Requests

const styles = StyleSheet.create({})