import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import colors from '../../colors';

const ModifyAccount = ({ navigation, route }) => {
    const scrollViewRef = useRef();
    const [firstName, setFirstName] = useState(route?.params?.name.split(' ')[0]);
    const [lastName, setLastName] = useState(route?.params?.name.split(' ')[1]);
    const [phoneNumber, setPhoneNumber] = useState(route?.params?.phoneNumber);
    const [profilePhoto, setProfilePhoto] = useState(route?.params?.photoUrl)

    function deleteAccount(id) {
        db.collection("users").doc(id).delete().then(() => {
            console.log("Account successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }

    async function updateAccount(id) {
        await db.collection("users").doc(id).update({
            name: firstName + ' ' + lastName,
            phoneNumber: phoneNumber,
            photoUrl: profilePhoto ,
        })

        navigation.goBack();
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}

            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={10}
        >


            <View onPress={() => Keyboard.dismiss} style={styles.container}>

                <LinearGradient
                    // Background Linear Gradient
                    colors={[colors.TAB_COLOR, colors.TAB_COLOR, 'white']}
                    style={styles.background}
                />

                <View>
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('Accounts')}>
                        <Image
                            style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                            source={require('../../icons/leftarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.titleTextStyle}>
                        Manage account
                    </Text>
                </View>
                <ScrollView style={{ height: '100%', top: -5 }}

                    ref={scrollViewRef}
                >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                First name
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params.name.split(' ')[0]}
                            onChangeText={text => setFirstName(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Last name
                            </Text>
                        </View>
                        <TextInput
                            placeholder={route?.params.name.split(' ')[1]}
                            onChangeText={text => setLastName(text)}
                            style={styles.normalTextStyle}
                        />

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Phone number
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params.phoneNumber}
                            keyboardType="numeric"
                            onChangeText={text => setPhoneNumber(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Profile photo
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    width: 60,
                                    height: 60,
                                    marginRight: 10,
                                    margin:6
                                }}
                                source={{ uri: route?.params?.photoUrl || ' ' }}
                            />
                            <TextInput
                                placeholder={route?.params.photoUrl}
                                onChangeText={text => setProfilePhoto(text)}
                                style={styles.normalTextStyle}
                            />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 200
                    }}>
                        <TouchableOpacity onPress={() => updateAccount(route?.params.id)} >
                            <View style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    Update
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => deleteAccount(route?.params.id)}>
                            <View style={{
                                backgroundColor: 'rgba(204, 12, 12, 0.7)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    Delete
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>


    )
}

export default ModifyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    titleTextStyle: {
        fontFamily: 'Times New Roman',
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        shadowColor: '#202020',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,



    },
    nameComp: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '200',
        color: '#202020',
        shadowColor: '#202020',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 10,
        marginVertical: 15,
        marginHorizontal: 20,
    },
    normalTextStyle: {
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 10
    }
})