import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Image, Platform } from 'react-native'
import { auth,db } from '../firebase'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [memberID, setMemberID] = useState('')
    const [temp, settemp] = useState(auth?.currentUser?.uid);

    useEffect(() => {
        const unsubscribe = db
            .collection("peoples")
            .onSnapshot(snapshot => {
                setMemberID(
                    snapshot.docs.filter((doc) => {
                        let t = false;

                        if (temp == doc.id) {
                            t = true;
                        }
                        return t;
                    }
                    ).map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    })))

            })
        return unsubscribe;
    }, [temp])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                if (memberID[0]?.data.ID == 1) {
                    navigation.replace("Tab navigator screen");
                } else if (memberID[0]?.data.ID == 2) {
                    navigation.replace("Staff home screen");
                } else if (memberID[0]?.data.ID == 3) {
                    navigation.replace("User home screen");
                }
            }
        })
        return unsubscribe
    }, [memberID])

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user);
            })
            .catch(error => alert(error.message))
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}

                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={90}
            >
                <View style={{ height: 100 }} />
                <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10 }}>
                    <TouchableOpacity
                        raised onPress={() => navigation.navigate("Get started screen")}
                    >
                        <Image source={require('../icons/leftarrow.png')} style={{ marginLeft: 10, width: 20, height: 20, marginBottom: 20 }}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        alignSelf: 'center',
                        marginBottom: 10,
                        color: '#202020',
                        fontSize: 28,
                        shadowOpacity: 0.6,
                        shadowOffset: { height: 2 },
                        shadowRadius: 2
                    }}
                    >Login</Text>
                    <Image
                        resizeMode='contain'
                        style={{
                            alignSelf: 'center',
                            aspectRatio: 1 / 1.25,
                            width: 400,
                            height: 400,
                            marginBottom: 0,
                            alignContent: 'center',
                            paddingTop: 10
                        }}
                        source={require('../icons/login.png')} />

                </View>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}

                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ height: 100 }} />
                </View>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    )

}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '80%',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 7,
        shadowColor: '#202020',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 8 },
        fontSize: 16,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#16adff',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#202020',
        shadowRadius: 35,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 8 },

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 20,
        borderColor: '#202020',
        borderWidth: 1,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#202020',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
