import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput,Image, Keyboard, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import LottieView from "lottie-react-native";
import colors from '../../colors';
import InstitutionItem from '../../Components/InstitutionItem';

const Institutions = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [institutions, setInstitutions] = useState([]);

    function deleteInstitution(id) {
        db.collection("institutions").doc(id).delete().then(() => {
            console.log("Institution successfuly deleted");
        }).catch((error) => alert(error));
        navigation.navigate("Institutions");
    }
const modifyInstitution = (name, id, photoUrl, description) => {
        navigation.navigate('Modify institution screen', {
            name: name,
            id: id,
            photoUrl: photoUrl,
            description: description
        });
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

    function filterZZZ(element) {
        try {
            if (element.data.name == '') {
                return false;
            }
            try {

                if (element.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    return true;

            } catch (err) {

            }
            return false
        } catch (err) {

        }
        return true
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.TAB_COLOR, 'white', 'white']}
                style={styles.background}
            />
            <SafeAreaView style={{alignContent:'center',alignItems:'flex-end',marginRight:30,marginTop:60}}>
                    <TouchableOpacity
                        raised onPress={() => navigation.navigate("Add institution screen")}
                    >
                        <Image source={require('../../icons/add.png')} style={{ marginLeft: 10, width: 40, height: 40, marginBottom: 20 }}></Image>
                    </TouchableOpacity>
                </SafeAreaView>
            <View style={{ marginBottom: 20, marginTop: 10, alignSelf: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    Institutions
                </Text>
            </View>
            <View style={{ marginBottom: 40, marginTop: 10 }}>

                <TextInput

                    onChangeText={(text) => setSearchText(text)}
                    placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
                >

                </TextInput>

                <TouchableOpacity style={{flex:1, alignSelf:'flex-end', bottom:45,right:42  }} onPress={Keyboard.dismiss}>
                    {Platform.OS != 'web' ?
                        <LottieView style={styles.animation} source={require("../../icons/search.json")} autoPlay loop />
                        : null}
                </TouchableOpacity>

            </View>
            <ScrollView style={{ height: '100%' }}>

                {
                    institutions.filter(filterZZZ).map(({ id, data: { name, imageLink, description } }) => (
                        <InstitutionItem key={id} modifyInstitution={modifyInstitution} name={name} id={id} description={description} photoUrl={imageLink} deleteInstitution={deleteInstitution} />
                    ))
                }



            </ScrollView>
        </View>
    )
}

export default Institutions

const styles = StyleSheet.create({
    animation: {
        top: 3,
        left: 0,
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        alignContent: 'center',
    },
    headerTextStyle: {
        color: 'white',
        fontFamily: 'Times New Roman',
        fontSize: 40,
        fontWeight: 'bold',
        shadowColor: '#202020',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { height: 3 }
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
    },
})