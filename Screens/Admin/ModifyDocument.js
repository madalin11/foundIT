import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import colors from '../../colors';
import SelectDropdown from 'react-native-select-dropdown';

import RequirementsDocsItem from '../../Components/RequirementsDocsItem';

const ModifyDocument = ({ navigation, route }) => {
    const scrollViewRef = useRef();
    const [name, setName] = useState(route?.params?.name);
    const [photoUrl, setPhotoUrl] = useState(route?.params?.photoUrl)
    const [description, setDescription] = useState(route?.params?.description)
    const [price, setPrice] = useState(route?.params?.price)
    const [chosenInstitution, setChosenInstitution] = useState(route?.params?.chosenInstitution)
    const [institutions, setInstitutions] = useState([])
    const [inherites, setInherites] = useState(route?.params?.inherites)
    const [docs, setDocs] = useState([])
    const [documents, setDocuments] = useState([]);

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
    useEffect(() => {
        const unsubscribe = db
            .collection("documents")
            .onSnapshot(snapshot => {
                setDocs(
                    snapshot.docs.filter((elm)=>(
                        inherites.indexOf(elm.id) !== -1)
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))
            }
            )
        return unsubscribe;
    }, [db])
    useEffect(() => {
        const unsubscribe = db
            .collection("documents")
            .onSnapshot(snapshot => {
                setDocuments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))
            }
            )
        return unsubscribe;
    }, [db])


    function deleteDocument(id) {
        db.collection("documents").doc(id).delete().then(() => {
            console.log("Document successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }
    const deleteInheriteDocs = (id) => {
        setDocs(docs.filter((elm)=>elm?.id !== id));
        console.log(docs);
   }

    async function updateDocument(id) {
        await db.collection("documents").doc(id).update({
            name: name,
            description: description,
            imageLink: photoUrl,
            price: price,
            chosenInstitution: chosenInstitution?.data?.name,
            institutionNameCoord: chosenInstitution?.data?.coordonate,
            documentsIds: docs.map(({id,data})=>id)
        })

        navigation.goBack();
    }
    useEffect(() => {
        const unsubscribe = db
            .collection("institutions")
            .onSnapshot(snapshot => {
                setInstitutions(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))
            }
            )
        return unsubscribe;
    }, [db])

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
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('Documents admin')}>
                        <Image
                            style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                            source={require('../../icons/leftarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.titleTextStyle}>
                        Manage document
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
                                Price
                            </Text>
                        </View>

                        <TextInput
                            placeholder={route?.params?.price}
                            type='number'
                            onChangeText={text => setPrice(text)}
                            style={styles.normalTextStyle}
                        />
                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 5 }}>
                        <View style={{ borderBottomColor: '#202020', borderBottomWidth: 2, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <Text style={styles.nameComp}>
                                Document photo
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    width: 60,
                                    height: 60,
                                    marginRight: 10,
                                    margin: 6
                                }}
                                source={{ uri: route?.params?.photoUrl || 'https://i.pinimg.com/564x/a2/5e/ed/a25eedd6c812b3873e614fa8b6e69c8b.jpg' }}
                            />
                            <TextInput
                                placeholder={route?.params?.photoUrl}
                                onChangeText={text => setPhotoUrl(text)}
                                style={styles.normalTextStyle}
                            />
                        </View>
                        <SelectDropdown
                            defaultButtonText= {route?.params?.chosenInstitution ?? 'Institution'}
                            defaultValue={route?.params?.chosenInstitution}
                            data={institutions.map((elm) => elm?.data?.name)}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                setChosenInstitution(institutions[index]);
                                console.log(chosenInstitution)
                            }}
                            dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                            buttonStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: 15,
                                width: '50%',
                                marginRight: 5,
                                shadowColor: '#202020',
                                shadowRadius: 15,
                                shadowOffset: { height: 1 },
                                shadowOpacity: 1,
                            }}
                        />
                        {
                        docs.map(({id,data})=>
                        <RequirementsDocsItem key={makeid(14)} index ={id} name={data?.name} deleteInheriteDocs={deleteInheriteDocs}/>
                        )
                    }
                    <SelectDropdown
                        defaultButtonText='Requirement documents'
                        data={documents.map((elm)=>elm.data?.name)}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setDocs([...docs,documents[index]]);
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            width: '60%',
                            marginRight: 5,
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 200
                    }}>
                        <TouchableOpacity onPress={() => updateDocument(route?.params?.id)} >
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

                        <TouchableOpacity onPress={() => deleteDocument(route?.params?.id)}>
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

export default ModifyDocument

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