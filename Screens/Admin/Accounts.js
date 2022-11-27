import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountItem from '../../Components/AccountItem';
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import LottieView from "lottie-react-native";
import colors from '../../colors';

const Accounts = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [accounts, setAccounts] = useState([]);

    function deleteAccount(id) {
        db.collection("users").doc(id).delete().then(() => {
            console.log("Account successfuly deleted");
        }).catch((error) => alert(error));
        navigation.goBack();
    }
const enterAccount = (name, id, photoUrl, phoneNumber) => {
        navigation.navigate('Modify account screen', {
            name: name,
            id: id,
            photoUrl: photoUrl,
            phoneNumber: phoneNumber,
        });
    }

    useEffect(() => {
        const unsubscribe = db
            .collection("users")
            .onSnapshot(snapshot => {
                setAccounts(
                    snapshot.docs.filter((doc) => doc.data().ID == 1 || doc.data().ID == 2
                    ).map((doc) => ({
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
                colors={[colors.BLUE, 'white', 'white']}
                style={styles.background}
            />
            <View style={{ marginBottom: 20, marginTop: 100, alignSelf: 'center' }}>
                <Text style={styles.headerTextStyle}>
                    Accounts
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
                        <LottieView style={styles.animation} source={require("../../icons/search.json")} />
                        : null}
                </TouchableOpacity>

            </View>
            <ScrollView style={{ height: '100%' }}>

                {
                    accounts.filter(filterZZZ).map(({ id, data: { name, photoUrl, phoneNumber } }) => (
                        <AccountItem key={id} enterAccount={enterAccount} name={name} id={id} photoUrl={photoUrl} phoneNumber={phoneNumber} deleteAccount={deleteAccount} />
                    ))
                }



            </ScrollView>
        </View>
    )
}

export default Accounts

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
        // shadowColor: '#202020',
        // shadowOpacity: 1,
        // shadowRadius: 2,
        shadowOffset: { height: 3 }
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
})