import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db, auth } from '../../firebase'
import colors from '../../colors'
import SelectDropdown from 'react-native-select-dropdown';
import RequirementsDocsItem from '../../Components/RequirementsDocsItem';

const AddDocument = ({ navigation }) => {

    const [memberID, setMemberID] = useState('')
    const [temp, settemp] = useState(auth?.currentUser?.uid);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [linkImage, setLinkImage] = useState('')
    const [chosenDocs, setChosenDocs] = useState([])
    const [chosenInstitution, setChosenInstitution] = useState('')
    const [chosenDocIds, setChosenDocIds] = useState([])
    const scrollViewRef = useRef();
    const institutions = [
        "Primarie",
        'Politie',
        'Scoala'
    ]
    const [documents, setDocuments] = useState([]);
    const docIds = [
        "3432432",
        '345243',
        'gre'
    ]
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

   const deleteInheriteDocs = (id) => {
        setChosenDocs(chosenDocs.filter((elm)=>elm?.id !== id));
        console.log(chosenDocs);
   }

    async function addDocument(id) {
        await db.collection("documents").doc(makeid(10)).set({
            name: name,
            description: description,
            price: price,
            imageLink: linkImage || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdocument&psig=AOvVaw01sZfLs9ywtwYuO_nDEGNF&ust=1669551050328000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJD9vbzoy_sCFQAAAAAdAAAAABAE",
            documentsIds: chosenDocIds,
            chosenInstitution: chosenInstitution
        }).then(() => {
            console.log("Document successfuly added");
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
                    <TouchableOpacity style={{ marginTop: 60, marginLeft: 15, marginRight: -15 }} onPress={() => navigation.navigate('Documents')}>
                        <Image
                            style={{ alignSelf: 'flex-start', width: 22, height: 22 }}
                            source={require('../../icons/leftarrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginBottom: 40, alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.titleTextStyle}>
                        Document
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
                                Taxes
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Add taxes"
                            keyboardType="numeric"


                            onChangeText={text => setPrice(text)}
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
                    <SelectDropdown
                        defaultButtonText='Institution'
                        data={institutions}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setChosenInstitution(institutions[index]);
                            console.log(chosenInstitution)
                        }}
                        dropdownStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5 }}
                        buttonStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 15,
                            width: '30%',
                            marginRight: 5,
                            shadowColor: '#202020',
                            shadowRadius: 15,
                            shadowOffset: { height: 1 },
                            shadowOpacity: 1,
                        }}
                    />
                    {
                        chosenDocs.map(({id,data})=>
                        <RequirementsDocsItem key={makeid(14)} index ={id} name={data?.name} deleteInheriteDocs={deleteInheriteDocs}/>
                        )
                    }
                    <SelectDropdown
                        defaultButtonText='Requirement documents'
                        data={documents.map((elm)=>elm.data?.name)}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setChosenDocs([...chosenDocs,documents[index]]);
                            console.log(chosenDocIds)
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
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 2
                    }}>
                        <TouchableOpacity onPress={addDocument}>
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

export default AddDocument

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