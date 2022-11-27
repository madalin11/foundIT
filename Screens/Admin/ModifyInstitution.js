import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import colors from '../../colors';

const ModifyInstitution = ({ navigation, route }) => {
    const scrollViewRef = useRef();
    const [name, setName] = useState(route?.params?.name);
    const [photoUrl, setPhotoUrl] = useState(route?.params?.photoUrl)
    const [description, setDescription] = useState(route?.params?.description)

    function deleteInstitution(id) {
        db.collection("institutions").doc(id).delete().then(() => {
            console.log("Institution successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }

    async function updateInstitution(id) {
        await db.collection("institutions").doc(id).update({
            name: name,
            description: description,
            photoUrl: photoUrl ,
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
                    colors={[colors.BLUE, colors.TAB_COLOR, 'white']}
                    style={styles.background}
                />

                <View>
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('Institutions')}>
                        <Image
                            style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                            source={require('../../icons/leftarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.titleTextStyle}>
                        Manage institution
                    </Text>
                </View>
                <ScrollView style={{ height: '100%', top: -5 }}

                    ref={scrollViewRef}
                >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Name
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params?.name}
                            onChangeText={text => setName(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Description
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params?.description}
                            onChangeText={text => setDescription(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Intitution photo
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
                                source={{ uri: route?.params?.photoUrl || 'https://i.pinimg.com/564x/a2/5e/ed/a25eedd6c812b3873e614fa8b6e69c8b.jpg' }}
                            />
                            <TextInput
                                placeholder={route?.params?.photoUrl}
                                onChangeText={text => setPhotoUrl(text)}
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
                        <TouchableOpacity onPress={() => updateInstitution(route?.params.id)} >
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

                        <TouchableOpacity onPress={() => deleteInstitution(route?.params?.id)}>
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

export default ModifyInstitution

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