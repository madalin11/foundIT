import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db, auth } from '../../firebase'
import colors from '../../colors'
import SelectDropdown from 'react-native-select-dropdown';
import RequirementsDocsItem from '../../Components/RequirementsDocsItem';

const AddInstitution = ({ navigation,route }) => {

    const [name, setName] = useState(route?.params?.name);
    const [description, setDescription] = useState(route?.params?.description);
    const [linkImage, setLinkImage] = useState(route?.params?.linkImage);
    const scrollViewRef = useRef();

    function deleteInstitution(id) {
        db.collection("institutions").doc(id).delete().then(() => {
            console.log("institutions successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }

    async function addInstitution(id) {
        await db.collection("institutions").doc(makeid(10)).set({
            name: name,
            description: description,
            imageLink: linkImage || "https://i.pinimg.com/564x/a2/5e/ed/a25eedd6c812b3873e614fa8b6e69c8b.jpg",
            coordonate: {
                x : 2,
                y: 3
            }
        }).then(() => {
            console.log("Institution successfuly added");
        }).catch((error) => alert(error));

        navigation.goBack();
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
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
                    colors={[colors.TAB_COLOR, 'white', 'white']}
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
                        Institution
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
                            placeholder="Add name"
                            onChangeText={(text) => setName(text)}
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
                            placeholder="Add description"

                            onChangeText={text => setDescription(text)}
                            style={styles.normalTextStyle}
                        />

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Image URL
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Add image url"
                            keyboardType="numeric"


                            onChangeText={text => setLinkImage(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 2
                    }}>
                        <TouchableOpacity onPress={addInstitution}>
                            <View style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: 10, paddingHorizontal: 40, marginHorizontal: 50, borderRadius: 10, shadowColor: '#202020',
                                shadowRadius: 10,
                                shadowOpacity: 0.6,
                                shadowOffset: { width: 0, height: 10 }
                            }}>

                                <Text>
                                    ADD
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>
    )
}

export default AddInstitution

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