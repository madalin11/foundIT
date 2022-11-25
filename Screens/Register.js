import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, db } from '../firebase'



const Register = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetePassword, setRepetePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function checkTextInput() {
    //Check for the Name TextInput
    if (!firstName.trim()) {
      alert('Please Enter First Name');
      return;
    }
    if (!phoneNumber.trim()) {
      alert('Please Enter Phone Number');
      return;
    }
    if (!lastName.trim()) {
      alert('Please Enter Last Name');
      return;
    }
    if (repetePassword.trim() !== password.trim()) {
      alert('Password doesn\'t match');
      return;
    }

    return true;
  };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Tab Stack")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  async function createUser(temp, name) {
    await db.collection("users").doc(temp).set({
      name: name,

    }).then(() => {
      console.log("User created successfully");
    }).catch((error) => alert(error));
  }

  const handleSignUp = () => {
    if (checkTextInput() == true) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          const auth1 = authUser.user;
          const fullName = firstName + " " + lastName;
          auth1.updateProfile({
            displayName: fullName,
          }).then(function () {
            console.log(auth1.displayName)
            console.log(auth1.uid)
            createUser(auth1.uid, auth1.displayName);

          }, function (error) {
          });
        })
        .catch(error => alert(error.message))
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ marginTop: 50 }}>

        <View style={{ marginBottom: 10 }}>
          {/* <TouchableOpacity
            raised onPress={() => navigation.navigate("Get started screen")}
          >
            <Image source={require('../Icons/leftarrow.png')} style={{ marginTop: 20, marginLeft: 10, width: 20, height: 20, marginBottom: 20 }}></Image>
          </TouchableOpacity> */}
        </View>
        <Text style={{ marginBottom: 50, fontSize: 30, textAlign: 'center', color: 'white', fontWeight: 'bold', fontFamily: 'Times New Roman', shadowColor: '#202020', shadowOpacity: 1, shadowOffset: { height: 3 }, shadowRadius: 2 }}>
          Signup
        </Text>
        <TextInput
          placeholder="First Name"
          type="text"
          autoCapitalize="words"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          type="text"
          autoCapitalize="words"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
        // secureTextEntry
        />
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
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          style={styles.input}
          keyboardType="numeric"

        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Repete Password"
          value={repetePassword}
          onChangeText={text => setRepetePassword(text)}
          style={styles.input}
          secureTextEntry
          onSubmitEditing={handleSignUp}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity

          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonOutlineText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 7,
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#202020',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 8 }


  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button: {
    backgroundColor: '#16adff',
    width: '90%',
    padding: 11,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#202020',
    shadowRadius: 20,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 }
  },
  buttonContainer: {
    width: '100%',
    paddingLeft: 70,
    paddingRight: 70,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 20,
    borderColor: '#202020',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});